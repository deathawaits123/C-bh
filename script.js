function addSubject() {
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const hoursCell = document.createElement('td');
    const gradeCell = document.createElement('td');
    const subjectInput = document.createElement('input');
    const hoursInput = document.createElement('input');
    const gradeInput = document.createElement('input');
  
    subjectInput.type = 'text';
    subjectInput.name = 'subject[]';
    subjectInput.placeholder = 'اسم المادة';
  
    hoursInput.type = 'number';
    hoursInput.name = 'hours[]';
    hoursInput.placeholder = 'عدد الساعات';
  
    gradeInput.type = 'number';
    gradeInput.name = 'grade[]';
    gradeInput.placeholder = 'الدرجة';
  
    subjectCell.appendChild(subjectInput);
    hoursCell.appendChild(hoursInput);
    gradeCell.appendChild(gradeInput);
  
    row.appendChild(subjectCell);
    row.appendChild(hoursCell);
    row.appendChild(gradeCell);
  
    table.appendChild(row);
  }
  
  function calculateGPA() {
    const subjects = document.getElementsByName('subject[]');
    const hoursInputs = document.getElementsByName('hours[]');
    const gradeInputs = document.getElementsByName('grade[]');
  
    let grades = [];
    let hours = [];
  
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i].value;
      const hoursInput = parseInt(hoursInputs[i].value);
      const gradeInput = parseInt(gradeInputs[i].value);
  
      grades.push(gradeInput);
      hours.push(hoursInput);
    }
  
    const sum = grades.reduce((acc, grade, index) => {
      return acc + (grade * hours[index]);
    }, 0);
  
    const semesterGPA = sum / 26;
    const cumulativeGPA = grades.reduce((acc, grade) => {
      return acc + grade;
    }, 0) / grades.length;
  
    document.getElementById('semesterGPA').textContent = semesterGPA.toFixed(2);
    document.getElementById('cumulativeGPA').textContent = cumulativeGPA.toFixed(2);
  }

  const quotes = [
    "النجاح يبدأ بالإيمان بأنك تستطيع.",
    "لا تتوقف عن المحاولة حتى تصل للنجاح.",
    "التفاؤل هو المفتاح للتغلب على التحديات.",
    "الإصرار والعمل الجاد يجعلان الأحلام تتحقق.",
    "التعلم المستمر هو سر النمو والتطور.",
    "التخطيط هو الأساس لتحقيق الأهداف.",
    "المثابرة تصنع الفارق في النجاح.",
    "استمتع بالرحلة نحو النجاح وليس فقط بالوصول إليه.",
    "التحفيز الذاتي هو مفتاح الإبداع والتميز.",
    "كن مصدر إلهام للآخرين وستجني ثمار نجاحك.",
"كلها درجات دنيا :(",
"النجاح ليس نهاية الطريق، بل بداية لمغامرة جديدة.",
"كل يوم هو فرصة جديدة لتكون أفضل من نفسك.",
"استمر في المضي قدمًا حتى وإن شعرت بالتعب، فالنجاح ينتظرك في النهاية.",
"تذكر دائمًا أن أكبر عدو للنجاح هو الاستسلام.",
"لا تخشى الفشل، بل استخدمه كدافع لتحقيق النجاح.",
"التغيير يبدأ من الداخل، فكن الشخص الذي ترغب في أن تصبح عليه.",
"العمل الجاد والاصرار هما المفتاحان لتحقيق الأهداف.",
"استمتع بالرحلة ولا تنسى أن تحتفل بكل تقدم صغير تحققه.",
"الثقة بالنفس هي أساس النجاح، فلا تتردد في إظهار قدراتك ومهاراتك."

  ];
  
  function showRandomQuote() {
    const quoteList = document.getElementById('quoteList');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteItem = document.createElement('li');
    quoteItem.textContent = quotes[randomIndex];
    quoteList.appendChild(quoteItem);
  }