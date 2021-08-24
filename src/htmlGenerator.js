const generateTeam = (teamArr) => {
  console.log('________________Generate Team Method Start________________');
let teamCardArray = teamArr.map(element => {
    if(element.getRole() === 'Manager'){
      return createCard(element, managerCard(element));
    }else if(element.getRole() === 'Engineer'){
      return createCard(element, engineerCard(element));
    }else if(element.getRole() === 'Intern'){
      return createCard(element, internCard(element));
    }else{
      console.log('Something Went Wrong!')
    }
  });
  console.log('________________Generate Team Data Received________________');
  return teamCardArray.join('');
      
  }
function managerCard(element){
  let {officeNumber} = element;
  return `<p>Office Number: ${officeNumber}</p>`
}
function engineerCard(element){
  let {github} = element;
  return `<p>github: ${github}</p>`
}
function internCard(element){
  let {school} = element;
  return `<p>School: ${school}</p>`
}

function createCard(element, roleSpecial){
  
  console.log('Card: ');
  console.log(element);
  let card = `
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${element.name}</h4>
        <p class="card-text">${element.role}</p>
        <a class="btn btn-primary" href="mailto:${element.email}">${element.email}</a>
        ${roleSpecial}
      </div>
    </div>
  </div>
  `;
  return card;
}
// for (let index = 0; index < teamArr.length; index++) {
//   const element = teamArr[index];
//   console.log(index);
//   if(element.Manager) {
//     console.log(element.Manager);
//     const manager = element.Manager;
//   }
//   console.log(element);
  
//   }
    // teamArr.find(team => team.role ==='Manager').map((member) => {
    //   const {name, email, role, officenumber} = member;
    //   console.log(member);
    //   return `
    //   <div class="team">
    //     <ul class="list-group list-group-flush">
    //       <li class="list-group-item">${role}: ${name}</li>
    //       <li class="list-group-item">          
    //         <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="mailto:${email}">
    //         ${email}</a>
    //       </li>
    //       <li class="list-group-item">Employee ID: ${id}</li>
    //       <li class="list-group-item">Office: ${officenumber}</li>
    //     </ul>
    //   </div>
    // `;
    // });

      //   return `
      //   <div class="team">
      //     <ul class="list-group list-group-flush">
      //       <li class="list-group-item">${team.role}: ${team.name}</li>
      //       <li class="list-group-item">          
      //         <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="mailto:${team.email}">
      //         ${team.email}</a>
      //       </li>
      //       <li class="list-group-item">Employee ID: ${team.id}</li>
      //       <li class="list-group-item">
      //       <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="${team.github}">
      //         Github
      //       </a>
      //       </li>
      //     </ul>
      //   </div>
      // `;

      //   return `
      //   <div class="team">
      //     <ul class="list-group list-group-flush">
      //       <li class="list-group-item">${team.role}: ${team.name}</li>
      //       <li class="list-group-item">          
      //         <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="mailto:${team.email}">
      //         ${team.email}</a>
      //       </li>
      //       <li class="list-group-item">${team.id}</li>
      //       <li class="list-group-item">School: ${team.school}</li>
      //       <li class="list-group-item">Vestibulum at eros</li>
      //     </ul>
      //   </div>
      // `;


const generateHTML = templateData => {
  console.log(templateData);
  const html =`
  <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Title</title>
    </head>
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white " href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white " href="https://github.com/jasjohn3">GitHub</a>
                </li>
          </nav>
        </div>
      </header>
    <main>
      <div class="container flex-row justify-space-between align-center"> 
        <h1 class="page-title text-light bg-dark px-3 text-center">Team Generator</h1>
        <div class="row">
          ${generateTeam(templateData)}
        </div>
      </div>
    </main> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
    <footer class="container text-center py-3">
      <h3 class="bg-dark text-white">&copy; 2021 by Jason</h3>
    </footer>
    </body>
    </html>
  `;
  return html;
}

module.exports = generateHTML;