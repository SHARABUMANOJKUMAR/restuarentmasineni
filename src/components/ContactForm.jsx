import React, { useState } from 'react';
import { Card } from './common/Card';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { Input, Textarea } from './common/FormInputs';
import { submitContactMessage } from '../services/contactService';
import { Send, RotateCcw, CheckCircle2, User, Mail, Phone, HelpCircle } from 'lucide-react';

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export const ContactForm = React.memo(function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setSuccessInfo(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessInfo(null);

    const result = await submitContactMessage(formData);

    setIsLoading(false);

    if (result.success) {
      setSuccessInfo(result);
      setFormData(INITIAL_FORM_STATE);
      setErrors({});
    } else {
      setErrors(result.errors || {});
    }
  };

  return (
    <Card
      variant="elevated"
      padding="xl"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)'
      }}
    >
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <Typography variant="h3" color="main" weight={700}>
          Send an Inquiry or Reserve a Table
        </Typography>
        <Typography variant="body" color="muted">
          Fill out the form below. Our restaurant guest relations manager will reach back via call or email within a few hours.
        </Typography>
      </div>

      {/* Success Notification Alert */}
      {successInfo && (
        <div
          role="status"
          style={{
            backgroundColor: '#E8F5E1',
            border: '1.5px solid var(--color-leaf-green)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md) var(--space-lg)',
            marginBottom: 'var(--space-lg)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-md)'
          }}
          className="animate-fade-in"
        >
          <CheckCircle2 size={24} color="var(--color-leaf-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <Typography variant="h4" color="green" weight={700}>
              Message Received Successfully!
            </Typography>
            <Typography variant="small" color="main" style={{ margin: '4px 0' }}>
              {successInfo.message}
            </Typography>
            <Typography variant="caption" color="muted">
              Reference ID: {successInfo.data?.inquiryId} • Timestamp: {new Date(successInfo.data?.submittedAt).toLocaleTimeString()}
            </Typography>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-md)'
          }}
        >
          {/* Full Name */}
          <Input
            label="Full Name"
            name="fullName"
            placeholder="e.g. Sharath Reddy"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
            icon={User}
            disabled={isLoading}
          />

          {/* Email Address */}
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="e.g. guest@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            icon={Mail}
            disabled={isLoading}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-md)'
          }}
        >
          {/* Phone Number */}
          <Input
            label="Mobile Phone Number"
            name="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            icon={Phone}
            disabled={isLoading}
          />

          {/* Subject / Purpose */}
          <Input
            label="Subject / Purpose"
            name="subject"
            placeholder="e.g. Table Reservation / Family Dinner"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            required
            icon={HelpCircle}
            disabled={isLoading}
          />
        </div>

        {/* Message */}
        <Textarea
          label="Your Message or Special Request"
          name="message"
          rows={4}
          placeholder="Please let us know your preferred date, time, number of guests, or dietary preferences..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
          disabled={isLoading}
        />

        {/* Form Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'var(--space-md)',
            marginTop: 'var(--space-lg)',
            flexWrap: 'wrap'
          }}
        >
          <Button
            type="button"
            variant="ghost"
            onClick={handleReset}
            disabled={isLoading}
            icon={RotateCcw}
          >
            Reset Fields
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            icon={Send}
            iconPosition="right"
          >
            Submit Inquiry
          </Button>
        </div>
      </form>
    </Card>
  );
});
