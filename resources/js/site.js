function expand( item ) 
{
    var expandIt = document.getElementById( item );
    if (expandIt.style.display == "block") 
    {
        expandIt.style.display = "none";
        expandIt.parentNode.className = "collapsed";
    } 
    else 
    {
        expandIt.style.display = "block";
        expandIt.parentNode.className = "expanded";
    }
}
