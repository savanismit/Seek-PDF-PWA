$(document).ready(function() {
    // SideNav Button Initialization
    $(".button-collapse").sideNav2();
      // SideNav Scrollbar Initialization
      var sideNavScrollbar = document.querySelector('.custom-scrollbar');
      var ps = new PerfectScrollbar(sideNavScrollbar);
});

        const show = () => {
    let myTable = document.getElementById('drop');
    myTable.style.display = "block";
}
const hide = () => {
    let myTable = document.getElementById('drop');
    myTable.style.display = "none";
}
   