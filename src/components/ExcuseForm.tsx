import React, { useState } from 'react';

// Typ dla wymówki
interface Excuse {
    name: string;
    reason: string;
    credibility: number;
    date: string;
    creativity: string;
    details: string;
    isUrgent: boolean;
}

interface ExcuseFormProps {
    addExcuse: (excuse: Excuse) => void;
}

const ExcuseForm: React.FC<ExcuseFormProps> = ({ addExcuse }) => {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [credibility, setCredibility] = useState(50);
    const [date, setDate] = useState('');
    const [creativity, setCreativity] = useState('');
    const [details, setDetails] = useState('');
    const [isUrgent, setIsUrgent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newExcuse: Excuse = {
            name,
            reason,
            credibility,
            date,
            creativity,
            details,
            isUrgent,
        };

        addExcuse(newExcuse);
        setName('');
        setReason('');
        setCredibility(50);
        setDate('');
        setCreativity('');
        setDetails('');
        setIsUrgent(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formularz */}
        </form>
    );
};

export default ExcuseForm;
