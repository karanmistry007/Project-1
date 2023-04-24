
        const labels = document.querySelectorAll( "label" );

        labels.forEach( function( label ) {
            label.innerHTML = label.innerText
                .split( "" )
                .map(function(letter, idx){
            return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`
        })
                .join( "" );
        } );