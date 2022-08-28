


async function asyncCall() { // will wait for resolve
	const json = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10').then(data => data.json());
	json.forEach(element => {


		function createCard(arr) {
			const card = document.createElement('div'); 
			card.classList.add('card');      
		
			const cardInfo = document.createElement('div');
			cardInfo.classList.add('card-info');     
		
			const cardTitle = document.createElement('div');
			cardTitle.classList.add('title');            
			const cardTitleH1 = document.createElement('h1');
			cardTitleH1.innerHTML = arr.name;    
			cardTitle.append(cardTitleH1);   
		
			const cardStatus = document.createElement('div');     
			cardStatus.classList.add('status');
			const cardLiveStatus = document.createElement('div');  
			cardLiveStatus.classList.add('live-status');
		
			const cardStatusP = document.createElement('p');   
			const cardStatusPText = document.createTextNode(arr.species + ' -- ' + arr.status); 
			cardStatus.append(cardLiveStatus);   
			cardStatusP.append(cardStatusPText); 
			cardStatus.append(cardStatusP);
			cardTitle.append(cardStatus);
			cardInfo.append(cardTitle);
		
			const cardContent = document.createElement('div');
			cardContent.classList.add('content');
			const cardContentText = document.createTextNode(arr.location.name);
			cardContent.append(cardContentText);
			cardInfo.append(cardContent);
		
			card.append(cardInfo);
		
			const cardImage = document.createElement('div');
			cardImage.classList.add('card-image');
			const image = document.createElement('img');
			image.src = arr.image;
			image.alt = 'Some image';
			cardImage.append(image);
			card.append(cardImage);
		
			container.append(card);

			console.log(arr)

			if (arr.status == 'Dead') {
				cardLiveStatus.classList.add('dead');
			}
			
			const male = document.querySelector('#male');
			const female = document.querySelector('#female');
			const alive = document.querySelector('#alive');
			const dead = document.querySelector('#dead');

			
			
			male.addEventListener('change', myFunction);

			female.addEventListener('input', myFunction2);
			alive.addEventListener('input', myFunction3);
			dead.addEventListener('input', myFunction4);

			

			function myFunction(event) {
				if(event.target.checked) {
					if(arr.gender != "Male") {
						card.style.display = 'none'};
				}else{
					card.style.display = 'flex';
				}
			}

			function myFunction2(event) {
				if(event.target.checked) {
					if(arr.gender != "Female") {
						card.style.display = 'none'};
				}else{
					card.style.display = 'flex';
				}
			}

			function myFunction3(event) {
				if(event.target.checked) {
					if(arr.status != "Alive") {
						card.style.display = 'none'};
				}else{
					card.style.display = 'flex';
				}
			}

			function myFunction4(event) {
				if(event.target.checked) {
					if(arr.status != "Dead") {
						card.style.display = 'none'};
				}else{
					card.style.display = 'flex';
				}
			}


		}
		createCard(element);
	});
}
  
asyncCall();

const container = document.querySelector('.container');



