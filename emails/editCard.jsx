import React, { useState } from 'react';

const editCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardholderName, setCardholderName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API to update card details
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Edit Bank Card Details</h2>
                <label style={styles.label}>
                    Card Number:
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                </label>
                <label style={styles.label}>
                    Expiration Date:
                    <div style={styles.expiryContainer}>
                        <input 
                            type="text" 
                            placeholder="MM" 
                            value={expiryMonth} 
                            onChange={(e) => setExpiryMonth(e.target.value)} 
                            required 
                            style={styles.inputExpiry} 
                        />
                        <input 
                            type="text" 
                            placeholder="YYYY" 
                            value={expiryYear} 
                            onChange={(e) => setExpiryYear(e.target.value)} 
                            required 
                            style={styles.inputExpiry} 
                        />
                    </div>
                </label>
                <label style={styles.label}>
                    CVC:
                    <input 
                        type="text" 
                        value={cvc} 
                        onChange={(e) => setCvc(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                </label>
                <label style={styles.label}>
                    Cardholder Name:
                    <input 
                        type="text" 
                        value={cardholderName} 
                        onChange={(e) => setCardholderName(e.target.value)} 
                        required 
                        style={styles.input} 
                    />
                </label>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>Save Changes</button>
                    <button type="button" onClick={() => {/* handle cancel */}} style={styles.cancelButton}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '700px',
        margin: '60px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    label: {
        marginBottom: '10px',
        padding: '5px',
        fontSize: '14px',
        color: '#555',
    },
    input: {
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '20px',
    },
    expiryContainer: {
        display: 'flex',
        gap:'20px',
    },
    inputExpiry: {
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        width: '48%', // Adjust width for two inputs
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        padding: '10px 15px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default editCard;