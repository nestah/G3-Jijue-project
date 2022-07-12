import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
			<div className="faq-answer">
				{faq.answer2}
			</div>
			<div className="faq-answer">
				{faq.answer3}
			</div>
			<div className="faq-answer">
				{faq.answer4}
			</div>
			<div className="faq-answer">
			{faq.answer5}
		</div>
		</div>
	)
}

export default FAQ