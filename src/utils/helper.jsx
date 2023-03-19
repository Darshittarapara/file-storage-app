export const capiltalLetter = (input) => {
  return (
    input?.charAt(0)?.toLocaleUpperCase() + input?.slice(1)?.toLocaleLowerCase()
  );
};


export const formatDDMMYYYFormat = (date) => {
  const [month, day, year] = date.toLocaleDateString().split('/');
  return `${day}-${month}-${year}`;
}

export const getCurrentMonth = (index) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[index]
}
