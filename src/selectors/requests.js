const getSortedRequests = (requests) => {
    const sortedRequests = requests.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    });
    
    return sortedRequests;
};

export default getSortedRequests;