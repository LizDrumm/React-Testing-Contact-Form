import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import ContactForm from './ContactForm'

describe ('Tests ContactForm', ()=>{
    test ('App renders without errors', ()=>{
    render (<ContactForm/>)
    
    })

    test('user can fill out and submit form', async ()=>{
        //1.arrange
        render(<ContactForm/>);
        //2.act
            //a.query each input
        const firstNameInput= screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        
        const submitButton = screen.getByTestId (/submit/i)
        //const button = screen.getByRole("button", {name:/submit!/i})
    
    
            //b.fill out our form elements
                        //note: second param is the event object 
        fireEvent.change(firstNameInput,{target:{name:'firstName',  value:'Liz'}})
        fireEvent.change(lastNameInput,{target:{name:'lastName', value:'Drumm'}});
        fireEvent.change(emailInput,{target:{name:'email',  value:'lizdrumm@gmail.com'}})
        fireEvent.change(messageInput,{target:{name:'message',  value:'test'}})
    
            //c.click our button
    
            fireEvent.click(submitButton);
    
        //3.assert
            // test that an our form input exists on the page
            const newUser = await screen.findByText(/drumm/i);
            console.log(newUser);
    })
    
    
    });

// import React from 'react';
// import { render , screen, fireEvent} from "@testing-library/react";
// import ContactForm from '../components/ContactForm'

// test('ContactFrom updates new info to the list', ()=>{
//     render(<ContactForm/>);

//     const firstNameInput = screen.getByLabelText(/first name/i)
//     const lastNameInput = screen.getByLabelText(/last name/i)
//     const emailInput = screen.getByLabelText(/email/i)
//     const messageInput = screen.getByLabelText(/message/i)


//     fireEvent.change(firstNameInput, {target: {value: 'Liz'}})
//     fireEvent.change(lastNameInput, {target: {value: 'McGinnis'}})
//     fireEvent.change(emailInput, {target: {value: 'jazmine@jazmine.com'}})
//     fireEvent.change(messageInput, {target: {value: '*Texts goes'}})


//     const submitButton = screen.getByTestId(/submit/i)
//     fireEvent.click(submitButton)
    
//     const newContact = screen.getByDisplayValue(/McGinnis/i)

// })