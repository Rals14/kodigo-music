import '../assets/css/Subscribe.css'
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

// Array of plans available
const plans = [
    { id: 1, name: 'Free', price: 'Free' },
    { id: 2, name: 'Premium', price: 4.99 },
    { id: 3, name: 'Family', price: 9.99 },
];

export const Subscribe = () => {

    const { register, handleSubmit, errors } = useForm();
    const [subscribers, setSubscribers] = useState([]);


    // Function to handle the form submission validate the data and add the new subscriber to the list
    const onSubmit = async (data) => {

        data.plan = plans.find((plan) => plan.id === Number(data.plan));

        if(data.password.length < 8){
            alert('Password must be at least 8 characters long');
            return
        }

        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return
        }

        const newSubscribers = [...subscribers, data];
        setSubscribers(newSubscribers);
        console.log(newSubscribers);
        alert('User  registered'); 

    };

    return (
        <>
            <Navbar />
            <main className='main-subscribe'>
                <h2>Subscribe to Kodigo Music</h2>
                <form className='subscribeForm' onSubmit={handleSubmit(onSubmit)}>
                    <div className='subscribeForm-div'>
                        <label className='subscribeForm-label'>Name:</label>
                        <input className='susbscribeForm-input' type="text" {...register('name', { required: true })} />
                    </div>

                    <div className='subscribeForm-div'>
                        <label className='subscribeForm-label'>
                            Last name:
                        </label>
                        <input className='susbscribeForm-input' type="text" {...register('lastName', { required: true })} />
                    </div>

                    <div className='subscribeForm-div'>
                        <label className='subscribeForm-label'>
                            Email:
                        </label>
                        <input className='susbscribeForm-input' type="email" {...register('email', { required: true })} />
                    </div>

                    <div>
                        <label className='subscribeForm-label'>
                            Password:
                        </label>
                        <input className='susbscribeForm-input' type="password" {...register('password', { required: true })} />
                    </div>

                    <div className='subscribeForm-div'>
                        <label className='subscribeForm-label'>
                            Confirm password:
                        </label>
                        <input className='susbscribeForm-input' type="password" {...register('confirmPassword', { required: true })} />
                    </div>

                    <div className='subscribeForm-div'>
                        <label className='subscribeForm-label'>
                            Choose a plan:
                        </label>
                        <select className='subscribeForm-select' defaultValue='' {...register('plan', { required: true })}>
                        <option value='' disabled="disabled"></option>
                            {plans.map((plan) => (
                                <option key={plan.id} value={plan.id}>
                                    {plan.name} (${plan.price})
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className='subscribeForm-btn' type="submit">Subscribe</button>
                </form>
            </main>
            <Footer />
        </>
    )
}
