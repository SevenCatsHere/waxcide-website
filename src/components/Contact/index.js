import React from 'react';
import styles from './index.module.scss';
import ContactForm from './Form';

function Contact() {
	return (
		<section className="section">
			<div className="content-wrapper w-container">
				<h1 className="page-title">Get in Touch</h1>
				<div className="contact-row w-row">
					<div className="w-col w-col-6">
						<h2 className="contact-h3">Contact Information</h2>
						<a className="contact-link" href="mailto:waxcidetechno@gmail.com">
							waxcidetechno@gmail.com
						</a>
					</div>

					<div className="w-col w-col-6">
						<h2 className="contact-h3">Availability</h2>
						<dl className={styles.availability}>
							<dt>Monday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Tuesday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Wednesday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Thursday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Friday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Saturday</dt>
							<dd>12:00AM &ndash; 12:00AM</dd>
							<dt>Sunday</dt>
							<dd className={styles.closed}>Closed</dd>
						</dl>
						<p className={styles.gmtNotice}>All times in GMT.</p>
					</div>
				</div>
			</div>

			<div className="container-wrapper w-container">
				<div className="contact-row">
					<h2 className="contact-h3">Contact for Hire</h2>
					<div className="form w-form">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
