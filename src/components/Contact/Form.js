import React from 'react';
import cn from 'classnames';
import styles from './Form.module.scss';

function ContactForm() {
	return (
		<>
			<form method="POST" action="/contact">
				<label className="field">
					Name:
					<input
						className="input w-input"
						name="name"
						type="text"
						placeholder="Your name&hellip;"
					/>
				</label>

				<label className="field">
					Email:
					<input
						className="input w-input"
						name="email"
						type="email"
						placeholder="you@example.com"
						required
					/>
				</label>

				<label className="field">
					Subject:
					<input
						className="input w-input"
						name="subject"
						type="text"
						placeholder="Title&hellip;"
						required
					/>
				</label>

				<label className="field">
					Message:
					<textarea
						className="input textarea w-input"
						name="message"
						min="10"
						placeholder="Your message&hellip;"
						required
					/>
				</label>

				<button className={cn('button', 'contact', 'w-button', styles.submitButton)} type="submit">
					Send Message
				</button>
			</form>
		</>
	);
}

export default ContactForm;
