import React, { Fragment } from 'react';
import styles from './index.module.scss';
import ContactForm from './Form';

type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface ContactHoursDay {
	id: string;
	day: DayOfWeek;
	from: string;
	to: string;
}

interface Props {
	availability: ContactHoursDay[];
	contactInfoHtml: string;
}

const Contact: React.FC<Props> = ({ availability, contactInfoHtml }) => (
	<section className="section">
		<div className="content-wrapper w-container">
			<h1 className="page-title">Get in Touch</h1>
			<div className="contact-row w-row">
				<div className="w-col w-col-6">
					<h2 className="contact-h3">Contact Information</h2>
					<div
						className={styles.contactInformation}
						dangerouslySetInnerHTML={{ __html: contactInfoHtml }}
					/>
				</div>

				<div className="w-col w-col-6">
					<h2 className="contact-h3">Availability</h2>
					<dl className={styles.availability}>
						{availability
							.map(day => ({
								...day,
								isClosed: !day.from || !day.to,
							}))
							.map(day => (
								<Fragment key={day.id}>
									<dt>{day.day}</dt>
									<dd className={day.isClosed ? styles.closed : null}>
										{day.isClosed ? 'Closed' : (
											<>{day.from} &ndash; {day.to}</>
										)}
									</dd>
								</Fragment>
							))}
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

export default Contact;
