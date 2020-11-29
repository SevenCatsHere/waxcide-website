import React, { Fragment } from 'react';
import styled from 'styled-components';
import ContactForm from './Form';
import Content from '../Content';

type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface ContactHoursDay {
	id: string;
	day: DayOfWeek;
	from: string;
	to: string;
}

const ContactInformation = styled(Content)`
	display: inline-block;
	margin-top: 5px;
	color: #999;
	transition: color .15s linear;
	text-decoration: none;
	&:hover {
		color: #fff;
	}
	@media (max-width: 767px) {
		margin-bottom: 30px;
	}
`;

const Availability = styled.dl`
	display: flex;
	flex-wrap: wrap;
	font-size: 1.05rem;

	dt {
		width: 40%;
		text-align: right;
		&::after {
			content: ':';
		}
	}

	dd {
		width: 60%;
		margin-left: 0;
		padding-left: .6em;
		text-align: left;
	}
`;

interface HoursProps {
	isClosed?: boolean;
}

const Hours = styled.dd<HoursProps>`
	${({ isClosed }) => (isClosed ? 'font-style: italic;' : '')}
`;

const GmtNotice = styled.p`
	font-style: italic;
`;

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
					<ContactInformation html={contactInfoHtml} />
				</div>

				<div className="w-col w-col-6">
					<h2 className="contact-h3">Availability</h2>
					<Availability>
						{availability
							.map(day => ({
								...day,
								isClosed: !day.from || !day.to,
							}))
							.map(day => (
								<Fragment key={day.id}>
									<dt>{day.day}</dt>
									<Hours isClosed={day.isClosed}>
										{day.isClosed ? 'Closed' : (
											<>{day.from} &ndash; {day.to}</>
										)}
									</Hours>
								</Fragment>
							))}
					</Availability>
					<GmtNotice>All times in GMT.</GmtNotice>
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
