const generateTeam = (teamArr) => {
  teamArr.map((team) => {
    return `
    <div class="team">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team.role}: ${team.name}</li>
        <li class="list-group-item">          
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="mailto:${team.email}">
          ${team.email}</a>
        </li>
        <li class="list-group-item">${team.id}</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  `;
  });
};
