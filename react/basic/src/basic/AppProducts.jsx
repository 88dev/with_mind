import React, { useState } from 'react';
import './App.css';
import Products from './components/Products.jsx';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            {showProducts && <Products />}
            <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
        </div>
    );
}

