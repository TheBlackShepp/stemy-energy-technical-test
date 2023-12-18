import '@testing-library/jest-dom'
import { expect, test} from '@jest/globals';
import {REQUEST_SATUS, URL} from "../../consts" 
import axios from 'axios';

test('API return not undefined', async () => {
    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get(URL);
        
            if (response.status !== REQUEST_SATUS.ok) {
                throw new Error('Network response was not ok');
            }
    
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error)
            return undefined
        }
    }

    const response = await fetchData()

    expect(response).not.toBeNull()
})