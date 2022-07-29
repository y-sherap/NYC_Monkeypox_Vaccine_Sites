import React from 'react'

const FAQPage = () => {
  return (
    <div className="mainFAQBody">
      <div className="FAQTitle">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div>
        <h3>How can I delete a clinic?</h3>
        <p>Navigate to the clinic borough. Then click into the trash icon</p>

        <h3>How can I update a clinic?</h3>
        <p>Navigate to the clinic borough. Then click into the pencil icon, which will direct you to a form with pre-populated data. Update and submit.</p>

        <h3>How can I create a clinic?</h3>
        <p>Navigate to the clinic borough. Enter clinic details and hit submit.</p>
      </div>
    </div>

  )
}

export default FAQPage