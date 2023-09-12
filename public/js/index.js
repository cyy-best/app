// $(document).ready(function () {
//     // 发送消息
//     function sendMessage() {
//         var messageText = $("#message-input").val();
//         if (messageText) {
//             var newMessage = '<div class="message sent"><div class="message-content">' + messageText + '</div></div>';
//             $(".chat-box").append(newMessage);
//             $("#message-input").val(""); // 清空输入框
//         }
//     }

//     // 监听回车键
//     $("#message-input").keypress(function (e) {
//         if (e.which == 13) { // 检查按下的键是否是回车键
//             sendMessage(); // 发送消息
//         }
//     });

//     // 点击发送按钮发送消息
//     $("#send-button").click(sendMessage);
// });
$(document).ready(function () {
    // 发送消息
    function sendMessage() {
        var messageText = $("#message-input").val().trim(); // 去除输入文本两端的空格
        if (messageText) {
            var newMessage = '<div class="message sent"><div class="message-content">' + messageText + '</div></div>';
            $(".chat-box").append(newMessage);
            $("#message-input").val(""); // 清空输入框
            $(".warning-message").hide(); // 隐藏警告消息
        } else {
            // 显示警告消息
            $(".warning-message").show();
        }
    }

    // 监听回车键
    $("#message-input").keypress(function (e) {
        if (e.which == 13) { // 检查按下的键是否是回车键
            e.preventDefault(); // 阻止回车键的默认行为
            sendMessage(); // 发送消息
        }
    });

    // 点击发送按钮发送消息
    $("#send-button").click(sendMessage);
});