import React from 'react';

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

interface ExcuseListProps {
    excuses: Excuse[];
}

const ExcuseList: React.FC<ExcuseListProps> = ({ excuses }) => {
    return (
        <div>
            <h2>Lista wymówek</h2>
            <ul>
                {excuses.map((excuse, index) => (
                    <li key={index}>
                        <p><strong>Imię:</strong> {excuse.name}</p>
                        <p><strong>Powód:</strong> {excuse.reason}</p>
                        <p><strong>Poziom wiarygodności:</strong> {excuse.credibility}</p>
                        <p><strong>Data:</strong> {excuse.date}</p>
                        <p><strong>Kreatywność:</strong> {excuse.creativity}</p>
                        <p><strong>Szczegóły:</strong> {excuse.details}</p>
                        <p><strong>Wymówka pilna:</strong> {excuse.isUrgent ? 'Tak' : 'Nie'}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExcuseList;
