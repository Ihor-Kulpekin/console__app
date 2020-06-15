const validationSchema = {
    login: {
        required: true,
        rules: [
            {
                test: (value) => /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value) || /^[a-zA-Z0-9_]+$/.test(value),
                message: 'Некорректный формат: введите валидный E-mail или имя аккаунта (допустимы латинские символы, цифры и подчеркивания)'      
            }
        ]
    },
    sublogin: {
        required: false,
        rules: [
            {
                test: (value) => /^[a-zA-Z0-9_]+$/.test(value),
                message: 'Некорректный формат: допустимы латинские символы, цифры и подчеркивания'  
            }
        ]
    },
    password: {
        required: true,
        rules: [
            {
                test: (value) => !/[а-яА-Я]/.test(value),
                message: 'Пароль не может содержать кириллицу' 
            }
        ]
    }
};

export default validationSchema;