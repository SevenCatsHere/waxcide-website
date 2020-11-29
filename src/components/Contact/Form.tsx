import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
	font-size: 1.2rem;
	color: #fff;
`;

const ContactForm: React.FC = () => (
	<>
		<form method="POST" action="/contact">
			<label className="field">
				Name
				<input
					className="input w-input"
					name="name"
					type="text"
					placeholder="Your name&hellip;"
				/>
			</label>

			<label className="field">
				Email
				<input
					className="input w-input"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
				/>
			</label>

			<label className="field">
				Subject
				<input
					className="input w-input"
					name="subject"
					type="text"
					placeholder="Title&hellip;"
					required
				/>
			</label>

			<label className="field">
				Message
				<textarea
					className="input textarea w-input"
					name="message"
					placeholder="Your message&hellip;"
					required
				/>
			</label>

			<SubmitButton className="button contact w-button" type="submit">
				Send Message
			</SubmitButton>
		</form>
	</>
);

export default ContactForm;
