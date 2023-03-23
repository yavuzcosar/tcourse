const connection = new signalR.HubConnectionBuilder()
    .withUrl("/Tasks")
    .withAutomaticReconnect()
    //.configureLogging(signalR.LogLevel.Debug)
    .build();

connection.on('Started', function (task) {
    $("#taskProgress .d-flex .progress-label").text(task.Title);
    StepLog("Started", task);
    $("#taskProgress").show();
});
connection.on('Progress', function (task) {
    StepLog("Progress", task);
    $("#taskProgress  .progress .progress-bar").css(
        'width',
        task.Progress + '%'
    );
    $("#taskProgress .d-flex .progress-percent").text(task.Progress + '%');
    $("#taskProgress .d-flex .progress-label").text(task.Title);
});
connection.on('Ended', function (task) {
    $("#taskProgress .d-flex .progress-label").text(task.Title);
    StepLog("Ended", task);
    if (task.Ended) {
        $("#taskProgress").hide(); 
    } 
    TaskEnded(task);
});
 
connection.on("OnError", function (data) {
    toastr.error(data, "Hata");
});

connection.start().then(function () {  
    TaskReady();
});
function StepLog(step,m) {
   // console.log(step,m);
};
function TaskStart(name, parameter) {
    StepLog("Starting", name + "-->" + parameter);
    connection.invoke("Start", name, parameter);
}