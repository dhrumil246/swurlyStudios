'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './ContactForm.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            {...register('name')} 
            className={errors.name ? 'error-input' : ''} 
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span id="name-error" className="error-text">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            {...register('email')} 
            className={errors.email ? 'error-input' : ''} 
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <span id="email-error" className="error-text">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            rows={4}
            {...register('message')} 
            className={errors.message ? 'error-input' : ''} 
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <span id="message-error" className="error-text">{errors.message.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="status-message success">Thank you! Your message has been sent.</div>
        )}
        {submitStatus === 'error' && (
          <div className="status-message error">Something went wrong. Please try again.</div>
        )}
      </form>
    </div>
  );
}
