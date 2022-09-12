function Templates(){}

Templates.menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30" version="1.1" id="menu_app">
    <path class="menu-icon" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
</svg>`;

Templates.defaultLogoOld = `<img src="images/icons/128x95.png" style="opacity:0.35;background-color: #fff;box-shadow: 0 0 5px 10px #fff;">`;
Templates.defaultLogo = `<div class="loading"><div class='logoRotateClockwise'><img src='images/policy.svg' class="loadingLogo"><div class='startUpProgress'></div></div></div>`;

Templates.json_timeLogRow = `{ 
    'rowId': Util.generateTimedUid(),
    'createddate': new Date().toISOString().split('T')[0],
    'activityid': ClientDataManager.lastEntry[ 'activityid' ],
    'hours': ClientDataManager.lastEntry[ 'hours' ],
    'activitydescription': ClientDataManager.lastEntry[ 'activitydescription' ],
    'status': Constants.status_queued
}`;

Templates.tr_issuedHeader = `<tr class="logTH">
    <th></th>
    <th>date</th>
    <th>to</th>
    <th>for</th>
    <th>status</th>
</tr>`;

Templates.tr_issuedRow = `<tr class="logTR">
    <td class="rowIcon"></td>
    <td class="date"></td>
    <td class="to"></td>
    <td class="for"></td>
    <td class="status"></td>
</tr>`;

Templates.tr_receivedHeader = `<tr class="logTH">
    <th></th>
    <th>date</th>
    <th>from</th>
    <th>for</th>
    <th>urgency</th>
</tr>`;

Templates.tr_receivedRow = `<tr class="logTR">
    <td class="rowIcon"></td>
    <td class="date"></td>
    <td class="from"></td>
    <td class="for"></td>
    <td class="urgency"></td>
</tr>`;

Templates.tr_AllHeader = `<tr class="logTH">
    <th>status</th>
    <th>date</th>
    <th>from</th>
    <th>for</th>
    <th>action</th>
</tr>`;


Templates.tr_allRow = `<tr class="logTR">
    <td class="rowIcon"></td>
    <td class="date"></td>
    <td class="from"></td>
    <td class="for"></td>
    <td class="action"></td>
</tr>`;

Templates.newDID_button = `<button class="newDID_Act actionButton btnBlueFill"> </button>`;

Templates.css_svg_pulsingCircles = `circle.bubble {
    opacity: 1;
    animation: 5.5s opacity infinite;
  }
  @keyframes opacity {
    15% {opacity: 0.5} 
    35% {opacity: 1}
    65% {opacity: 1} 
    85% {opacity: 0.5}
  }
  circle.circ_0 {animation-delay: 0.5s}
  circle.circ_1 {animation-delay: 1s}
  circle.circ_2 {animation-delay: 1.5s}
  circle.circ_3 {animation-delay: 2s}
  circle.circ_4 {animation-delay: 2.5s}
  circle.circ_5 {animation-delay: 3s}
  circle.circ_6 {animation-delay: 3.5s}
  circle.circ_7 {animation-delay: 4s}
  circle.circ_8 {animation-delay: 4.5s}
  circle.circ_9 {animation-delay: 5s}`;

Templates.css_svg_pulsingGlowCircles = `circle.glow {
    opacity: 1;
    animation: 5.5s opacity infinite;
  }
  @keyframes opacity {
    15% {opacity: 0.25} 
    35% {opacity: 0.75}
    65% {opacity: 0.75} 
    85% {opacity: 0.25}
  }
  circle.glow_9 {animation-delay: 0.5s}
  circle.glow_8 {animation-delay: 1s}
  circle.glow_7 {animation-delay: 1.5s}
  circle.glow_6 {animation-delay: 2s}
  circle.glow_5 {animation-delay: 2.5s}
  circle.glow_4 {animation-delay: 3s}
  circle.glow_3 {animation-delay: 3.5s}
  circle.glow_2 {animation-delay: 4s}
  circle.glow_1 {animation-delay: 4.5s}
  circle.glow_0 {animation-delay: 5s}`;


Templates.DIDvalidRows = `<tr class="did_historyDoc">
    <td class="badgeIcon"></td>
    <td>&nbsp;<span class="did_scheme"></span>&nbsp;</td>
    <td>&nbsp;<span class="did_method"></span>&nbsp;</td>
    <td>&nbsp;<span class="did_identifier"></span>&nbsp;</td>
    <td>&nbsp;<span class="did_date"></span></td>
</tr>`

Templates.img_loading = `<img src="images/loading_small.svg" style="height:20px;">`;
Templates.img_question = `<img src="images/question.svg" style="height:18px;">`;

Templates.tag_pausedTimer = `<img class="smallTimerPaused_tdIcon" src="images/paused.svg">`;
Templates.tag_busyTimer = `<div class="smallTimerSpinner_tdIcon"></div>`;

Templates.home_buttonMethod = `<div class="accountMethod"></div>`;
Templates.home_labelGroup = `<div class="home_Group"></div>`;

Templates.did_controllerOption = `<div class="controllerOption did_scheme"></div>`;
Templates.did_controllerMethodOption = `<div class="methodOption"></div>`;

Templates.consentIssue_selectionOptions = `<div class="consentSelector">
  <input type='hidden' class='data'>
</div>`;



Templates.did_controllerAgreement = `<div class="userControllerAgreement flexRow">
    <div class="icon"></div>
    <div class="controllerAgreement flexRow flexGap">
        <div class="agreement_id"></div><div class="agreement_version"></div> <div class="agreement_timestamp"></div>
    </div>
</div>`;

Templates.did_issuedAccountKey = `<div class="issuedAccountKey flexRow">
    <div class="icon">&nbsp;</div>
    <div class="account flexRow flexGap">
        <div class="did_scheme"></div> : <div class="did_method"></div> : <div class="did_identifier"></div> <div class="did_timestamp"></div>
    </div>
</div>`;

Templates.inp_boolean = `<div class="toggleSwitchContainer">
    <label class="switch">
        <input type="checkbox" class="toggleSwitch" toggleValue="false">
        <span class="slider round"></span>
    </label>
</div>`;

Templates.inp_booleanSmall = `<div class="toggleSwitchContainerSmall">
    <label class="switch">
        <input type="checkbox" class="toggleSwitch" toggleValue="false">
        <span class="slider round"></span>
    </label>
</div>`;

Templates.inp_checkboxOption = `<div class="inputCheckbox flexRow">
    <div class=""><input type="checkbox"></div>
    <div class="displayName flexRow flexGap"></div>
</div>`;

Templates.signature_buttonIcon = `<button class="signatureButtonIcon"></button>`;
Templates.signature_buttonHelpIcon = `<button class="signatureButtonHelpIcon"></button>`;

Templates.div_newEntryTable = `<form autocomplete="off">
<table class="entryTbl">
    <thead>
        <tr class="recordTH">
            <th colspan=3 class="newRecordHeader">Timed Event</th>
        </tr>
    </thead>
    <tbody>
    <tr class="logTR">
        <td>
            <label>Activity</label>
        </td>
        <td>
            <select class="activityList inputField" field="activityid" style="width:100%;"></select>
        </td>
        <td></td>
    </tr>
    <tr class="logTR">
        <td>
            <label>Description</label>
        </td>
        <td>
            <textarea id="" class="inputField" field="activitydescription" style="width:100%;"></textarea>
        </td>
        <td></td>
    </tr>
    <tr class="logTR">
        <td style="text-align:right;">
        <img src='images/clock.svg' style="width:32px;height:32px;vertical-align:middle;opacity:0.75;">
        </td>
        <td>
            <input type="number" class="inputField inputHour" field="plannedHours" style="width: 60px;" autocomplete="false" pattern="[0-9]*" inputmode="numeric" step="0.5">
            <span class="inputHour_roundedUp" style="padding: 0 10px;"></span>
            <input type="number" class="hiddenField" style="display:none;" autocomplete="false" pattern="[0-9]*" inputmode="numeric">
        </td>
        <td></td>
    </tr>

    </tbody>
    </table>
    </form>`;



Templates.previewWorkflowStep = `
    <dialog id="dialog_confirmation_mac" style="display: block;z-index:8888;">

    <div class="dialog__title"><label class="title">blah blah blah :-)</label></div>

    <div class="dialog__status">
        <div class="icon dialog__status-img" ></div>
    </div>

    <div class="prompt dialog__mainText"></div>

    <div class="dialog__action">
        <button class="cancelButton actionButton btnGray">CANCEL</button>
        <button class="confirmButton actionButton">OK</button>
    </div>

    </dialog>`;

Templates.promptSummary = `
    <dialog id="dialog_confirmation_mac" style="display: block;z-index:8888;">

    <div class="dialog__title"><label class="title">blah blah blah :-)</label></div>

    <div class="dialog__status">
        <div class="icon dialog__status-img" ></div>
    </div>

    <textarea class="prompt dialog__mainText"></textarea>

    <div class="dialog__action">
        <button class="confirmButton actionButton">COPY</button>
        <button class="cancelButton actionButton btnGray">CLOSE</button>
    </div>

    </dialog>`;

Templates.confirmationPrompt = `
    <dialog id="dialog_confirmation_mac" style="display: block;z-index:8888;">

    <div class="dialog__title"><label class="title">blah blah blah :-)</label></div>

    <div class="dialog__status">
        <div class="icon dialog__status-img" ></div>
    </div>

    <div class="prompt dialog__mainText"></div>

    <div class="dialog__action">
        <button class="confirmButton actionButton">CONFIRM</button>
        <button class="cancelButton actionButton btnGray">CANCEL</button>
    </div>

    </dialog>`;

Templates.confirmSavePrompt = `
    <dialog id="dialog_confirmation_mac" style="display: block;">

    <div class="dialog__title"><label class="title">blah blah blah :-)</label></div>

    <div class="dialog__status">
        <div class="icon dialog__status-img" ></div>
    </div>

    <div class="prompt dialog__mainText"></div>

    <div class="dialog__action">
        <button class="confirmButton actionButton">SAVE</button>
        <button class="cancelButton actionButton btnGray">CANCEL</button>
    </div>

    </dialog>`;

Templates.copyTextNotificationPopup = `<div class="bg-modal">
    <div class="modal-content">
        <header class="modal-header">
        <h3 class="pm-h3 modal-content__title">Use authorization token to sign in</h3>
        <button class="close-modal">
            <i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" rfill="none">
                <path d="M5.1558 4.198a.677.677 0 1 0-.9574.9573l2.8441 2.8441-2.844 2.8442a.6774.6774 0 1 0 .958.958l2.844-2.8442 2.8437 2.8437a.677.677 0 1 0 .9574-.9573L8.9579 8.0001l2.8437-2.8437a.6775.6775 0 0 0-.958-.958L7.9999 7.0421 5.1558 4.198z" fill="#A9A9A9"></path>
            </svg>
            </i>
        </button>
        </header>
        <div class="modal-content__body dialog__action">
            <div classname="modal-content__body-content">
                <h3 class="pm-h3 modal-content__sec-title">Authorization token</h3>
                <label class="modal__description">Paste this token in the 'Enter authorization token' field on the Desktop App.</label>
            </div>
            <textarea class="modal__content-text-area" id="content-text" readonly="">postman://auth/callback?code=bbc7016e3158ab3aaea243c2bfe1188b1ea8d9eb716789c4ac8112de178119f3</textarea>
            <button class="modal__copy-content confirmButton" id="clipboard-cpy-btn">Copy</button>
        </div>
    </div>
</div>`;

Templates.notificationPreviewPopup = `<div class="bg-modal">
    <div class="modal-content">
        <header class="modal-header">
        <h3 class="pm-h3 modal-content__title">Use authorization token to sign in</h3>
        <button class="close-modal">
            <i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" rfill="none">
                <path d="M5.1558 4.198a.677.677 0 1 0-.9574.9573l2.8441 2.8441-2.844 2.8442a.6774.6774 0 1 0 .958.958l2.844-2.8442 2.8437 2.8437a.677.677 0 1 0 .9574-.9573L8.9579 8.0001l2.8437-2.8437a.6775.6775 0 0 0-.958-.958L7.9999 7.0421 5.1558 4.198z" fill="#A9A9A9"></path>
            </svg>
            </i>
        </button>
        </header>
        <div class="modal-content__body dialog__action">
            <div classname="modal-content__body-content">
                <h3 class="pm-h3 modal-content__sec-title">Authorization token</h3>
                <div class="modal__description">Paste this token in the 'Enter authorization token' field on the Desktop App.</div>
            </div>
            <div class="modal__content-div-area"></div>
            <button class="modal__okClose-content confirmButton" id="ok-btn">OK</button>
        </div>
    </div>
</div>`;

Templates.presentQRPopup = `<div class="bg-modal">
    <div class="modal-content dialog__action">
        <header class="modal-header">
        <h3 class="pm-h3 modal-content__title">Use authorization token to sign in</h3>
        <button class="close-modal">
            <i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" rfill="none">
                <path d="M5.1558 4.198a.677.677 0 1 0-.9574.9573l2.8441 2.8441-2.844 2.8442a.6774.6774 0 1 0 .958.958l2.844-2.8442 2.8437 2.8437a.677.677 0 1 0 .9574-.9573L8.9579 8.0001l2.8437-2.8437a.6775.6775 0 0 0-.958-.958L7.9999 7.0421 5.1558 4.198z" fill="#A9A9A9"></path>
            </svg>
            </i>
        </button>
        </header>
        <div class="modal-content__qr dialog__action">
            <div classname="modal-content__body-content">
                <h3 class="pm-h3 modal-content__sec-title">Authorization token</h3>
                <div class="modal__description">Paste this token in the 'Enter authorization token' field on the Desktop App.</div>
            </div>
            <div class="modal__content-div-qr-area"></div>
        </div>
        <button class="modal__okClose-bottom confirmButton" id="ok-btn">OK</button>
    </div>
</div>`;

Templates.notificationNextPopup = `<div class="bg-modal">
    <div class="modal-content">
        <header class="modal-header">
        <h3 class="pm-h3 modal-content__title">Use authorization token to sign in</h3>
        <button class="close-modal">
            <i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" rfill="none">
                <path d="M5.1558 4.198a.677.677 0 1 0-.9574.9573l2.8441 2.8441-2.844 2.8442a.6774.6774 0 1 0 .958.958l2.844-2.8442 2.8437 2.8437a.677.677 0 1 0 .9574-.9573L8.9579 8.0001l2.8437-2.8437a.6775.6775 0 0 0-.958-.958L7.9999 7.0421 5.1558 4.198z" fill="#A9A9A9"></path>
            </svg>
            </i>
        </button>
        </header>
        <div class="modal-content__body dialog__action">
            <div classname="modal-content__body-content">
                <h3 class="pm-h3 modal-content__sec-title">Authorization token</h3>
                <div class="modal__description">Paste this token in the 'Enter authorization token' field on the Desktop App.</div>
            </div>
            <div class="modal__content-div-area"></div>
            <button class="modal__okClose-content confirmButton" id="ok-btn">Next</button>
        </div>
    </div>
</div>`;

Templates.agreementPreviewPopup = `
<div class="bg-modal">
    <div class="modal-content">
        <header class="modal-header">
        <h3 class="pm-h3 modal-content__title">agreement Title</h3>
        <button class="close-modal">
            <i class="pm-icon pm-icon-sm pm-icon-secondary pm-btn__default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" rfill="none">
                <path d="M5.1558 4.198a.677.677 0 1 0-.9574.9573l2.8441 2.8441-2.844 2.8442a.6774.6774 0 1 0 .958.958l2.844-2.8442 2.8437 2.8437a.677.677 0 1 0 .9574-.9573L8.9579 8.0001l2.8437-2.8437a.6775.6775 0 0 0-.958-.958L7.9999 7.0421 5.1558 4.198z" fill="#A9A9A9"></path>
            </svg>
            </i>
        </button>
        </header>
        <div class="modal-content__body dialog__action">
            <div class="modal-agreement__sec-title">Authorization token</div>
            <table class="agreementAgreeAll"></table>
            <div class="modal__content-agreement-div-area" id="agreement-data"></div>
            <div class="agreementSignature">
                <table class="agreementSignature"></table>
            </div>
            <button class="modal__okClose-content confirmButton agreementNext-btn">Next</button>
        </div>
    </div>
</div>`;

Templates.QRPopup = `
<div class="qr-code-generator">
    <div id="qrcode" style="width: 128px; height: 128px;">
        <canvas width="128" height="128"></canvas>
    </div>  
</div>`;

Templates.anyMessageNotificationPopup = `
    <dialog id="dialog_confirmation_mac" style="display: block;z-index:8888;">

    <div class="dialog__status">
        <div class="icon dialog__status-img" ></div>
    </div>

    <div class="prompt dialog__mainText"></div>

    <div class="dialog__action">
        <button class="confirmButton actionButton">OK</button>
    </div>

    </dialog>`;

Templates.loadingPopup = `
    <dialog class="dialog_loadingPopup" style="display: block;">

    <div class="dialog__animation" style="height:120px;text-align: -webkit-center;margin: 35px 0 10px 0;"></div>

    <div class="loading_message" style="font-size: 1.2em;font-weight:400;min-height:40px;"></div>

    </dialog>`;

Templates.progressPanelPopup = `
    <dialog class="dialog_loadingPopup" style="display: block;">

    <div class="dialog__animation" style="height:120px;text-align: -webkit-center;margin: 35px 0 10px 0;"></div>

    <div class="loading_itemList" style="font-size: 1.2em;font-weight:400;min-height:40px;"></div>

    </dialog>`;