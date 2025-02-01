import React from 'react';
import './FlexBoxVSGrid.css';

{/* Flexbox = 1 row, columns only & grid is like a graph w/ columns & rows*/}
const FlexBoxVsGrid = () => {
    return (
<div class="container">
    {/* Flex Section*/}
    <div class="flexbox-layout">
        <div class="title">Flexbox Layout</div>
        <div class="flex-container">
            <div class="flex-item">🍓</div>
            <div class="flex-item">🍓</div>
            <div class="flex-item">🍓</div>
            <div class="flex-item">🍓</div>
            <div class="flex-item">🍓</div>
            <div class="flex-item">🍓</div>
        </div>
    </div>

{/* Grid Section */}
    <div class="grid-layout">
        <div class="title">Grid Layout</div>
        <div class="grid-container">
            <div class="grid-item">🍓</div>
            <div class="grid-item">🍓</div>
            <div class="grid-item">🍓</div>
            <div class="grid-item">🍓</div>
            <div class="grid-item">🍓</div>
            <div class="grid-item">🍓</div>
        </div>
    </div>
</div>

    )
};

export default FlexBoxVsGrid;