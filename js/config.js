/**
 * Created by User on 21/09/2015.
 */
var app_config;
app_config = {
    "path_by_type":{"HR":"app.docs"},
    "menu_list":{"ROWSET": { "ROW": [{
        "DOC_TYPE": "HR",
        "DOC_DESCR": "טפסים ארגונים",
        "ENABLE": "Y",
        "PATH":"app.browse",
        "COUNT":6
    },
        {
            "DOC_TYPE": "INV",
            "DOC_DESCR": "אישור חשבוניות",
            "ENABLE": "N",
            "PATH":"app.browse",
            "COUNT":0
        },
        {
            "DOC_TYPE": "PO",
            "DOC_DESCR": "אישור הזמנות",
            "ENABLE": "N",
            "PATH":"app.browse",
            "COUNT":0
        }
    ]
    }
    } , // menu_list
    "docs_list":{"ROWSET": { "ROW": [{"DOC_TYPE":"HR",
        "DOC_ID": "242",
        "DOC_INIT_ID": "12345678",
        "DOC_NAME":"השלמת נוכחות",
        "DOC_TITLE":"אושר : טופס השלמת נוכחות עבור רומן, ויינר"
    },
        {"DOC_TYPE":"HR",
            "DOC_ID": "242",
            "DOC_INIT_ID": "12345679",
            "DOC_NAME":"השלמת נוכחות",
            "DOC_TITLE":"אושר : טופס השלמת נוכחות עבור אורי,דגן"
        },
        {"DOC_TYPE":"HR",
            "DOC_ID": "242",
            "DOC_INIT_ID": "12345680",
            "DOC_NAME":"השלמת נוכחות",
            "DOC_TITLE":"אושר : טופס השלמת נוכחות עבור מרב,קרן"
        }
    ]
    }
    }
};
