import React, { useState } from 'react';
import Header from '../components/Header';
import FAQ from '../components/FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'WHAT IS HIV?',
      answer: 'Did you know that HIV came from chimps as far as the 19th century? Human hunters were the bridge to this, as they would eat the meat or come into contact with the blood of monkeys and apes.',
       answer2: 'HIV, fully known as Human Immunodeficiency Virus is a virus that weakens the body\'s ability to fight off infections. A non-curable but controllable disease.',                                                                           
       answer3: 'Therefore a person infected with HIV virus has a resultant weak immunity and if not treated will lead to AIDS- Acquired Immuno Deficieny Syndrome-the most severe stage of HIV infection.',
      open: false
    },
    {
      question: 'HOW CAN I KNOW THAT I HAVE HIV?',
      answer: 'GETTING TESTED!',
      answer2: 'HIV is somewhat of a silent and non specific disease in its early stages and symptoms only come about in advanced stages.',
      answer3: 'At first, flu-like symptoms may show within 2-6 weeks after infection; fever, sorethroat, body rash, but thereafter may take several years for any other symptoms to show.',
      open: false
    },
    {
      question: 'WHAT ARE THE SYMPTOMS OF HIV?',
      answer: 'Acute symptoms include headache, cough, sorethroat, swollen lymph nodes, fever, skin rashes, joint and muscle pain, diarrhea and vomiting, weight loss.',
      open: false
    },
    {
      question: 'HOW DO I GET TESTED FOR HIV?',
      answer: 'its very simple, it only requires that you could either visit the nearest VCT and have a test done or simply order a self-test kit at the comfort of your home.',
      answer2: 'A special device is used and it will give you results in 20-60 minutes',
      open: false
    },
    {
      question: 'WHAT IF I TEST POSITIVE FOR HIV?',
      answer: 'it\'s all managable and treatable. it\'s all under your control.',
      answer2: 'HIV treatment has revolutionized throughout the years, with simpler and better treatments incorporated and people are living longer and with a better quality of life than ever before.',
      answer3: 'Therefore prompting immediate and consistent medical treatment is important here. The earlier you start it, the better the outcome.',
      answer4: 'Building up a healthy lifestyle is a crucial key to improving your life. Doing what makes you happy and that which most importantly adds value to your health. Get this, physical exercise actually boosts your immunity.',
      answer5:'A healthy balanced diet, adequate & regular sleep patterns and most importantly, talking about it to your loved ones will all better your final outcome.',
      

    },
    {
      question: 'CAN I STILL HAVE KIDS NOW THAT I HAVE HIV?',
      answer: 'YES!.',
      answer2:'You can lead a normal life despite this. Doctors will help you take steps to lower the chances that you\'ll pass the virus to your partner and to your child.',
      answer3:'The child will also be given some preventive medication right after birth.',
      open: false
    },
    {
      question: 'IS THERE A CURE/VACCINE FOR HIV?',
      answer: 'NO. Atleast not yet. Scientists are however working on it.',
      open: false
    },
    {
      question: 'CAN CONDOMS PREVENT HIV?',
      answer: 'condoms come in a variety of types- most common being latex. They are good at preventing HIV spread through sex but only when used every time you have sex and if used correctly .',
      answer2: 'They prevent contact with body fluids that could spread the virus.',
      open: false
    },
    {
      question: 'WHAT IS PREP?',
      answer: 'This is the Pre-Exposure Prophylaxis. Which is medication given to people at substantial risk of HIV infection as part of HIV prevention approaches.',
      answer2: 'It is only taken for those who are HIV negative and do not have the acute symptoms of HIV.',
      open: false
    },
    {
      question: 'WHAT IS PEP?',
      answer: 'This is Post-Exposure Prophylaxis.',
      answer2: ' The use of medication to reduce the likelihood of HIV infection after potential exposure, given as soon as possible within 72hrs after exposure.',
      open: false
    }
    
  ]);
   
  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        <h1 style={{color:"#3498ff"}}>MORE ON FAQs</h1>
        <div>
          <p style={{color:"#3498ff"}}>PREP RECOMMENDATIONS</p>
          <h2> It is mainly recommended for people who have sexual Partner(s) :</h2>
          <p> - who is a known HIV positive and is not on treatment.</p>
          <p> - Who Has been on treatment for less than 6 months.</p>
          <p> - Who is Suspected to be poorly taking the treatment. </p>
          <p> - Who has Unknown or detectable viral load.</p>
          <img src='/6.jpg' style={{width:'170px', height:'110px'}} alt=''></img>
          <p>Sexual partners who of unkown HIV status and are at high risk of infection</p>
          <p>Recurrent sex under influence of alcohol.</p>
          <p>Where one of the partners is HIV positive and they are trying to conceive.</p>
          <p style={{color:"#3498ff"}}>IS PREP SAFE </p>
          <p>It is safe. But some people experience side effects</p>
          <p>Diarrhea, Nausea, Headache, Fatigue, Stomach pain. Tell your doctor about any severe side effects that persist.</p>
          <p style={{color:"#3498ff"}}>PREP AND PREGNANCY </p>
          <p>PrEP may be an option to reduce the likelihood of HIV infection after potential exposure,</p>
          <p>given as soon as possible within 72hrs after exposure.</p>
          <p style={{color:"#3498ff"}}>WHAT IS PEP? </p>
          <p>This is Post-exposure Prophylaxis</p>
          <img src='/5.jpg' style={{width:'170px', height:'110px'}} alt=''></img>
          <p>It is given in:</p>
          <p> - Accidental contact with blood through being pricked by a sharp shared needle, syringes, to inject drugs.</p>
          <p>If you've been sexually assaulted.</p>
          <p style={{color:"#3498ff"}}>SIDE EFFECTS OF PEP</p>
          <p>It is safe for use but may cause Nausea in some people.</p>  
          <img src='/7.jpg' style={{width:'170px', height:'110px'}} alt=''></img>
          
        </div>
      </div>
    </div>
  );
}

export default App;