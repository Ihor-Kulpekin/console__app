import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import beautify from 'js-beautify';
import { sendRequest } from '../../actions/historyActions';
import { updateFields } from '../../actions/consoleFormActions';
import { saveSettings } from '../../actions/viewSettingsActions';
import SvgIcon from '../SvgIcon/SvgIcon';
import Loader from '../Loader/Loader';
import {ConsoleErrors, StyledForm, StyledFormFields} from '../../styled-components/Console';
import Label from '../Label/Label';
import Footer from '../Footer/Footer';

export const ConsoleForm = ({ formData, sendRequest, updateFields, saveSettings, fieldWidth }) => {
    const requestFieldBox = useRef(null);

    const [isFetching, setFetchingStatus] = useState(false);

    useEffect(() => {
        requestFieldBox.current.style.width = fieldWidth;
    }, []);

    const handleRequestInput = (e) => {

        const errors = [];

        try {
            const requestText = JSON.parse(e.target.value);
            if (!requestText.action) {
                errors.push('Запрос должен содержать параметр action');
            }
        } catch(e) {
            errors.push('Введите валидный JSON');
        }

        updateFields({
            requestText: e.target.value,
            errors,
            responseText: '',
            isSuccess: true,
            isRequestTextValid: errors.length > 0 ? false : true
        });
    };

    const formatRequest = () => {
        updateFields({
            requestText: beautify(formData.requestText)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFetchingStatus(true);
        sendRequest(JSON.parse(e.target.elements.requestText.value)).then(() => {
            setFetchingStatus(false);
        });
    };

    const initResize = () => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    };

    const resize = (e) => {
        const element = requestFieldBox.current;

        element.style.width = (e.clientX - element.offsetLeft) + 'px';
    };

    const stopResize = () => {
        const requestFieldWidth = requestFieldBox.current.style.width;
        saveSettings({ requestFieldWidth });
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormFields>
                <div 
                    ref={requestFieldBox}
                    className={ formData.errors.length > 0 ? "console-form__field console-form__field--request console-field console-field--invalid" : "console-form__field console-form__field--request  console-field" }>
                    <Label value="Запрос" labelHint="console__label"/>
                    <textarea 
                        name="requestText" 
                        id="req" 
                        onChange={handleRequestInput}  
                        className="console-field__editor" 
                        value={formData.requestText}
                    />
                </div>
                <div onMouseDown={initResize}  className="console-form__separator"> 
                    <span></span> 
                </div>
                <div className={ !formData.isSuccess > 0 ? "console-form__field console-form__field--response console-field console-field--invalid" : "console-form__field console-form__field--response  console-field" }>
                    <Label value="Ответ" labelHint="console__label"/>
                    <textarea 
                        readOnly  
                        name="responseText" 
                        id="res"  
                        className="console-field__editor"
                        value={formData.responseText}
                    />
                </div>
            </StyledFormFields>
            { formData.errors.length > 0 && (
              <ConsoleErrors>
                  {formData.errors.map((error, index) => <p key={index}>{error}</p>)}
              </ConsoleErrors>
            ) }
            <Footer formData={formData} formatRequest={formatRequest} isFetching={isFetching}/>
        </StyledForm>
    );
};

const mapStateToProps = state => ({
    formData: state.consoleForm,
    fieldWidth: state.viewSettings.requestFieldWidth
});

const mapDispatchToProps = dispatch => ({
    sendRequest: (requestText) => dispatch(sendRequest(requestText)),
    updateFields: (updates) => dispatch(updateFields(updates)),
    saveSettings: (settings) => dispatch(saveSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleForm);
