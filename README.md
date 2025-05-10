# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

write a readme abiut the project

## Overview

A React-based web application that simulates a student savings group investing in Play-to-Earn blockchain games. The app helps 12 students collectively manage their savings across different investment tiers, track weekly interest, and simulate withdrawals.

## Features

    Student Registration: Add members with name and tier selection

    Tier System: Three investment tiers with different interest rates

        Tier 1: ₦10,000 (5% weekly interest)

        Tier 2: ₦20,000 (10% weekly interest)

        Tier 3: ₦30,000 (20% weekly interest)

    Savings Dashboard: View total savings and individual contributions

    Game Earnings: Simulates 20% return on total investment

    Withdrawal System: Remove members and free up slots

    Weekly Progression: Advance time to calculate new interest
## Live Demo
  View Demo ([https://webbrigde-test.vercel.app/]) Saving Group
  Screenshots
  Registration Screen
  Dashboard Screen
## Technologies Used
    React 18
    Vite
    CSS3
    JavaScript ES6+

## Getting Started
Prerequisites
    Node.js (v16 or higher)
    npm or yarn
Installation
    Clone the repository:
    bash

git clone https://github.com/writeshittu/webbrigdeTest.git
cd webbrigdeTest
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
Open your browser to:
http://localhost:5173
# Project Structure
src/
├── components/
│   ├── StudentRegistration.jsx
│   ├── SavingsDashboard.jsx
│   ├── MemberList.jsx
│   ├── WithdrawalForm.jsx
│   └── TierInfoCard.jsx
├── styles/
│   ├── App.css
│   └── components.css
├── App.jsx
└── main.jsx
