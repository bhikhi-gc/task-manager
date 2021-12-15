import React from 'react';


class Home extends React.Component{


	renderArticle = (event) => {
		let val = event.target.value;
		const articles = document.querySelectorAll('.myArticle')
		articles.forEach(article => {
			article.setAttribute('style', 'display: none');
		});
	    switch(val) {
	      case '1':
	        return( 
	        	document.querySelector('#firstArticle').style.display='block'
	        	)
	      case '2':
	        return( 
	        	document.querySelector('#secondArticle').style.display='block'
	        	)
	      case '3':
	        return( 
	        	document.querySelector('#thirdArticle').style.display='block'
	        	)
	    }
	  };
	render(){
		return(
			<div className="mv5 w-80 pa3 pv5 bg-white-90 center tl">
				<select id="selectBar" className="br1 ba b--black w-80 w-80-m w-25-l pa3 ph2" 
				
				onChange={ this.renderArticle }>
					<option name='first' value='1'>First Article</option>
					<option name='second' value='2'>Second Article</option>
					<option name='third' value='3'>Third Article</option>
				</select>
				<article id='firstArticle' className="myArticle br1 ba pa3 pv4 mt4 tl">
					<h1>First</h1>
					Quisque blandit elit nunc, nec fringilla enim finibus quis. Sed a blandit nulla. Suspendisse sed nibh mauris. 
					Proin interdum sapien vitae libero vehicula, ac lacinia turpis dapibus. Suspendisse porttitor feugiat magna. 
					Integer interdum mattis nisl, a fringilla elit efficitur ac. Phasellus consectetur tellus in cursus congue.
					Aenean id nisl et augue auctor accumsan eget eu dui. <br/><br/>
					Sed pulvinar lectus quis massa luctus egestas. 
					Maecenas ultricies ut sem non molestie. Aliquam erat volutpat. 
				</article>
				<article id='secondArticle' className="myArticle br1 ba pa3 pv4 mt4 tl" style={ {display: 'none'} }>
					<h1>Second</h1>
					Sed molestie mollis purus, nec faucibus diam congue eu. 
					Pellentesque sit amet sapien eget felis accumsan sagittis quis at lorem. 
					Mauris elementum fringilla tristique. Quisque non felis elementum, maximus leo efficitur, tincidunt purus. 
					Donec semper neque id placerat placerat. Curabitur vestibulum sapien ut feugiat convallis. 
					Proin pulvinar consequat turpis a sollicitudin. 
					Mauris tellus magna, lobortis vitae eros ornare, commodo viverra purus 
				</article>
				<article id='thirdArticle' className="myArticle br1 ba pa3 pv4 mt4 tl" style={ {display: 'none'} }>
					<h1>Third</h1>
					Mauris elementum fringilla tristique. Quisque non felis elementum, maximus leo efficitur, tincidunt purus. 
					Donec semper neque id placerat placerat. Curabitur vestibulum sapien ut feugiat convallis. 
					Proin pulvinar consequat turpis a sollicitudin. <br/><br/>
					Mauris tellus magna, lobortis vitae eros ornare, commodo viverra purus.
					Quisque blandit elit nunc, nec fringilla enim finibus quis. Sed a blandit nulla. Suspendisse sed nibh mauris. 
					Proin interdum sapien vitae libero vehicula, ac lacinia turpis dapibus. Suspendisse porttitor feugiat magna. 
					Integer interdum mattis nisl, a fringilla elit efficitur ac. Phasellus consectetur tellus in cursus congue.
					Aenean id nisl et augue auctor accumsan eget eu dui. Sed pulvinar lectus quis massa luctus egestas. 
					Maecenas ultricies ut sem non molestie. Aliquam erat volutpat. 
				</article>
			</div>
		)
	}
}

export default Home;