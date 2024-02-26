import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// VisitorCounter Component
const VisitorCounter = () => {
    // State to store visitor counts for the current and last month
    const [visitorCounts, setVisitorCounts] = useState({ currentMonth: 0, lastMonth: 0 });

    // Ref to track the mounting status of the component
    const isMounted = useRef(true);

    // Function to fetch visitor counts from the server
    const fetchVisitorCount = async () => {
        try {
            // Make an asynchronous request to get visitor counts
            const response = await axios.get('http://localhost:8080/visitor-count/api/v1/get-visitor-count');
            const { currentMonthVisits, lastMonthVisits } = response?.data || {};

            // Update state with the fetched visitor counts
            setVisitorCounts({ currentMonth: currentMonthVisits || 0, lastMonth: lastMonthVisits || 0 });
        } catch (error) {
            // Log any errors that occur during the fetch
            console.error(error);
        }
    };

    // Function to increment the visitor count on button click
    const incrementVisit = async () => {
        try {
            // Make an asynchronous request to increment the visitor count
            await axios.post('http://localhost:8080/visitor-count/api/v1/visitor-count/increment');

            // After incrementing, fetch the updated visitor counts
            fetchVisitorCount();
        } catch (error) {
            // Log any errors that occur during the increment
            console.error(error);
        }
    };

    // useEffect to handle component lifecycle and initial data fetching
    useEffect(() => {
        // Function to encapsulate the asynchronous fetchData logic
        const fetchData = async () => {
            // Check if the component is still mounted before performing side effects
            if (isMounted.current) {
                // Increment and fetch visitor counts when the component mounts
                await incrementVisit();
                await fetchVisitorCount();

                // Set isMounted to false to prevent further updates when unmounted
                isMounted.current = false;
            }
        };

        // Invoke the fetchData function when the component mounts
        fetchData();
    }, []); // Empty dependency array ensures the effect runs only on mount

    // Render the component UI
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <div>
                <h1>Visitor Counter</h1>
                <p>This Month: {visitorCounts.currentMonth} visits</p>
                <p>Last Month: {visitorCounts.lastMonth} visits</p>
            </div>
        </div>
    );
};

// Export the VisitorCounter component as the default export
export default VisitorCounter;
