//"cerner_2tothe5th_2022"

<script>
    let count = 0
    function handleClick(event) {
        console.log(event);
        count += 1
    }
    function handleClickNext(event, stepSize) {
        console.log(event);
        count += stepSize
    }
</script>

<main>
    <!-- Inline event Handlers -->
    <button on:click = {() => (count = count+1)}> Count {count}</button>
    <button on:click = {handleClick}> Count {count}</button>
    <!-- We can also specify the arguments -->
    <button on:click = {(event) =>handleClickNext(event,5)}> Count {count}</button>
</main>
