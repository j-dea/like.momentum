const style = {
    noStyle: '',
    title: {
		all: 'font-size: 2rem; font-weight: bold; color: #ffd737;',
		j: 'font-size: 2rem; font-weight: bold; color: #b2cadd; background-color: #ffffdb;',
		d: 'font-size: 2rem; font-weight: bold; color: #ddb2ca; background-color: #ffffdb;',
		e: 'font-size: 2rem; font-weight: bold; color: #cab2dd; background-color: #ffffdb;',
		a: 'font-size: 2rem; font-weight: bold; color: #caddb2; background-color: #ffffdb;',
	},
    projectName: 'color: white; background-color: #565492;',
    link: 'color: #dddddd;'
}

const text = `
%c J%cD%cE%cA %c Like Project 
%c like.momentum 
%chttps://github.com/jdea/like.momentum
`;

const styles = [
    style.title.j, style.title.d, style.title.e, style.title.a, style.title.all, 
    style.projectName,
    style.link,
];

console.log(text, ...styles);