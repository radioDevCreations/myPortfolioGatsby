interface JobObject {
    company: string;
    position: string;
    date: string;
    description: {
        content: string;
    }
}

export default JobObject;