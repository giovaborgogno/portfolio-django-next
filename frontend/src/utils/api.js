import axios from 'axios';

// Projects

export const get_projects = async (limit = 6) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        // const res = await axios.get(`http://localhost:8000/api/projects/get-projects?order=desc`, config);
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/projects/get-projects?order=desc&limit=${limit}`, config);

        if (res.status === 200) {
            return res.data.projects
        } else {
            return null
        }

    } catch (err) {
        return null
    }
}

export const get_project = async (projectId) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        // const res = await axios.get(`http://localhost:8000/api/projects/project/${projectId}`, config);
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/projects/project/${projectId}`, config);
        if (res.status === 200) {
            return res.data.project
        } else {
            return null
        }
    } catch (err) {
        return null
    }
}

// End Projects Section

// -------------------------------------------------------------------------------------------------------------------------------- //

// Experience

export const get_experience = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/experience/get-experience`, config);

        if (res.status === 200) {
            return res.data.experience
        } else {
            return null
        }

    } catch (err) {
        return null
    }
}

// End Experience Section

// -------------------------------------------------------------------------------------------------------------------------------- //

// Education

export const get_education = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/api/education/get-education`, config);

        if (res.status === 200) {
            return res.data.education
        } else {
            return null
        }

    } catch (err) {
        return null
    }
}

// End Education Section

// -------------------------------------------------------------------------------------------------------------------------------- //

// Contact

export const send_email = async (
    full_name,
    email,
    subject,
    message
) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({
        full_name,
        email,
        subject,
        message
    });

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/api/contact/send-email`, body, config);

        if (res.status === 200) {
            return
        } else {
            return
        }
    } catch (err) {
        return
    }
}

// End Contact Section