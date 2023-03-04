/* Group */
function GroupAdd() {
    var UnitId = $("#UnitId").val();
    var CourseId = $("#CourseId").val();
    var TermId = $("#TermId").val();
    var Name = $("#GName").val();
    if (TermId && Name) {
        var url = "/Group/Add?UnitId=" + UnitId + "&CourseId=" + CourseId + "&TermId=" + TermId + "&Name=" + Name;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                $("#GName").val("");
                DataReload();
            }
        });
    }
    else {
        toastr.warning("Şube ekleyebilmek için dönem seçin ve şube adı girin !");
    }
}
function GroupDelete(el) {
    ReloadAttr("/Group/Delete/", "groupid", el);
}
/* Teacher */
function TeacherFindAdd() {
    var CourseId = $("#CourseId").val();
    var GroupId = $("#GroupId").val();
    var UName = $("#UName").val();
    if (GroupId && UName) {
        var url = "/Teacher/AddJson?CourseId=" + CourseId + "&GroupId=" + GroupId + "&UName=" + UName;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                $("#UName").val("");
                DataReload();
            }
        });
    }
    else {
        toastr.warning("Eğitmen ekleyebilmek için Şube seçin ve KullanıcıAdı girin !");
    }
}
function TeacherCoordinator(el) {
    ReloadAttr("/Teacher/CoordinatorJson/", "TeacherId", el);
}
function TeacherDelete(el) {
    ReloadAttr("/Teacher/DeleteJson/", "TeacherId", el);
}
/* Enrollment */
function EnrollmentFindAdd() {
    var CourseId = $("#CourseId").val();
    var GroupId = $("#GroupId").val();
    var UName = $("#UName").val();
    if (GroupId && UName) {
        var url = "/Enrollment/AddJson?CourseId=" + CourseId + "&GroupId=" + GroupId + "&UName=" + UName;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                $("#UName").val("");
                DataReload();
            }
        });
    }
    else {
        toastr.warning("Öğrenci ekleyebilmek için Şube seçin ve KullanıcıAdı girin !");
    }
}
function EnrollmentCancel(el) {
    ReloadAttr("/Enrollment/CancelJson/", "EnrollmentId", el);
}
function EnrollmentReturn(el) {
    ReloadAttr("/Enrollment/ReturnJson/", "EnrollmentId", el);
}
function EnrollmentDelete(el) {
    ReloadAttr("/Enrollment/DeleteJson/", "EnrollmentId", el);
}
/* ExamQuestion */
function EQuestionAddAll(ExamId) {
    if (ExamId) {
        ReloadUrl("/Exam/QuestionAddAll?ExamId=" + ExamId);
    }
}
function QuestionCleanAll(ExamId) {
    if (ExamId) {
        ReloadUrl("/Exam/QuestionCleanAll?ExamId=" + ExamId);
    }
}
function EQuestionAdd(ExamId, QuestionId) {
    if (ExamId && QuestionId) {
        ReloadUrl("/Exam/QuestionAdd?ExamId=" + ExamId + "&QuestionId=" + QuestionId);
    }
}
function EQuestionRemove(EQuestionId) {
    ReloadUrl("/Exam/QuestionRemove/" + EQuestionId);
}
function EQuestionCancel(EQuestionId, CancelType) {
    ReloadUrl("/Exam/QuestionCancel/" + EQuestionId + "?CancelType=" + CancelType);
}
function EQuestionReturn(EQuestionId) {
    ReloadUrl("/Exam/QuestionReturn/" + EQuestionId);
}
function EQuestionActive(EQuestionId) {
    ReloadUrl("/Exam/QuestionActive/" + EQuestionId);
}
/* Question */
function QuestionsUploaded(f) {
    if (f.IsSuccess) {
        window.location.href = f.RedirectUrl;
    }
    else {
        toastr.error(f.Message);
    }
}
function QuestionDelete(QuestionId) {
    if (QuestionId) {
        var url = "/Question/Delete/" + QuestionId;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                DataReload();
            }
        });
    }
}
function QuestionArchive(QuestionId) {
    if (QuestionId) {
        var url = "/Question/Archive/" + QuestionId;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                DataReload();
            }
        });
    }
}
function QuestionReturn(QuestionId) {
    if (QuestionId) {
        var url = "/Question/Return/" + QuestionId;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                DataReload();
            }
        });
    }
}
function QuestionRearchive(QuestionId) {
    if (QuestionId) {
        var url = "/Question/Rearchive/" + QuestionId;
        $.get(url, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                DataReload();
            }
        });
    }
}
/* VClassFile */
function VFileAdd(VClassId) {
    var FileId = $("#FileId").val();
    if (VClassId && FileId) {
        $.get("/VClass/FileAdd?VClassId=" + VClassId + "&FileId=" + FileId, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                FilesReload();
            }
        });
    }
    else
        toastr.warning("Dosya seçin");
}
function VFileDelete(el) {
    var VFileId = $(el).attr("VFileId");
    if (VFileId) {
        $.get("/VClass/FileDelete/" + VFileId, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                FilesReload();
            }
        });
    }
}

/* Announce */
function AnnounceFileDelete(el) {
    var AFileId = $(el).attr("AFileId");
    console.log($(el));
    if (AFileId) {
        $.get("/Announce/FileDelete/" + AFileId, function (data) {
            ResultToast(data);
            if (data.IsSuccess) {
                FilesReload();
            }
        });
    }
}


function ReloadAttr(url, att, el) {
    var data = $(el).attr(att);
    if (data) {
        ReloadUrl(url + data);
    }
}
function ReloadUrl(url) {
    $.get(url, function (data) {
        ResultToast(data);
        if (data.IsSuccess) {
            DataReload();
        }
    });
}