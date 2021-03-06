$(function () {
    $('#myLayout').w2layout({
        name: 'myLayout',
        panels: [
            { type: 'top', size: 60 },
            { type: 'left', size: 150, resizable: true },
            { type: 'right', size: 150, resizable: true }
        ]
    });
    var grid = $('#myGrid').w2grid({
        name: 'myGrid',
        columns: [
            { field: 'fname', text: 'First Name', size: '30%' },
            { field: 'lname', text: 'Last Name', size: '30%' },
            { field: 'email', text: 'Email', size: '40%' },
            { field: 'sdate', text: 'Start Date', size: '120px' },
        ],
        records: [
            { recid: 1, fname: 'John', lname: 'Doe', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 2, fname: 'Stuart', lname: 'Motzart', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'jdoe@gmail.com', sdate: '4/3/2012' },
            { recid: 9, fname: 'Sergei', lname: 'Rachmaninov', email: 'jdoe@gmail.com', sdate: '4/3/2012' }
        ]
    });
    grid.onAdd = function (event) { console.log('onAdd', event); };
    grid.onChange = function (event) { console.log('onChange', event); };
    //grid.onClick = (event) => { console.log('onClick', event); };
    grid.onCollapse = function (event) { console.log('onCollapse', event); };
    grid.onColumnAutoResize = function (event) { console.log('onColumnAutoResize', event); };
    grid.onColumnClick = function (event) { console.log('onColumnClick', event); };
    grid.onColumnDragEnd = function (event) { console.log('onColumnDragEnd', event); };
    grid.onColumnDragStart = function (event) { console.log('onColumnDragStart', event); };
    grid.onColumnOnOff = function (event) { console.log('onColumnOnOff', event); };
    grid.onColumnResize = function (event) { console.log('onColumnResize', event); };
    grid.onColumnSelect = function (event) { console.log('onColumnSelect', event); };
    //grid.onContextMenu = (event) => { console.log('onContextMenu', event); };
    grid.onCopy = function (event) { console.log('onCopy', event); };
    grid.onDblClick = function (event) { console.log('onDblClick', event); };
    grid.onDelete = function (event) { console.log('onDelete', event); };
    grid.onEdit = function (event) { console.log('onEdit', event); };
    grid.onEditField = function (event) { console.log('onEditField', event); };
    grid.onError = function (event) { console.log('onError', event); };
    grid.onExpand = function (event) { console.log('onExpand', event); };
    grid.onKeydown = function (event) { console.log('onKeydown', event); };
    grid.onLoad = function (event) { console.log('onLoad', event); };
    grid.onMenuClick = function (event) { console.log('onMenuClick', event); };
    grid.onPaste = function (event) { console.log('onPaste', event); };
    grid.onReload = function (event) { console.log('onReload', event); };
    grid.onRequest = function (event) { console.log('onRequest', event); };
    grid.onResizerDblClick = function (event) { console.log('onResizerDblClick', event); };
    grid.onRestore = function (event) { console.log('onRestore', event); };
    grid.onSave = function (event) { console.log('onSave', event); };
    grid.onSearch = function (event) { console.log('onSearch', event); };
    //grid.onSelect = (event) => { console.log('onSelect', event); };
    grid.onSelectionExtend = function (event) { console.log('onSelectionExtend', event); };
    grid.onSort = function (event) { console.log('onSort', event); };
    grid.onStateRestore = function (event) { console.log('onStateRestore', event); };
    grid.onStateSave = function (event) { console.log('onStateSave', event); };
    grid.onSubmit = function (event) { console.log('onSubmit', event); };
    grid.onToolbar = function (event) { console.log('onToolbar', event); };
    //grid.onUnselect = (event) => { console.log('onUnselect', event); };
    grid.show.toolbar = true;
    grid.trigger({ type: 'add' });
    grid.trigger({ type: 'change' });
    grid.trigger({ type: 'collapse' });
    grid.trigger({ type: 'columnAutoResize' });
    grid.trigger({ type: 'columnClick' });
    grid.trigger({ type: 'columnDragEnd' });
    grid.trigger({ type: 'columnDragStart' });
    grid.trigger({ type: 'columnOnOff' });
    grid.trigger({ type: 'columnResize' });
    grid.trigger({ type: 'columnSelect' });
    grid.trigger({ type: 'copy' });
    grid.trigger({ type: 'dblClick' });
    grid.trigger({ type: 'delete' });
    grid.trigger({ type: 'edit' });
    grid.trigger({ type: 'editField' });
    grid.trigger({ type: 'error' });
    var input = document.createElement('input');
    document.body.append(input);
    $(input).on('click', function () {
        var overlay;
        overlay = $(this).w2overlay("<div style='padding: 10px'>We can pass text directly.</div>");
        overlay = $(this).w2overlay({
            html: "<div style='padding: 10px'>We can pass text directly or throught the options object html property</div>",
            onShow: function () { return; },
            onHide: function () { return true; }
        });
        overlay[0].required = false;
    });
    $('#myToolbar').w2toolbar({
        name: 'myToolbar',
        items: [
            { type: 'check', id: 'item1', text: 'Check', img: 'icon-add', checked: true },
            { type: 'break' },
            {
                type: 'menu', id: 'item2', text: 'Drop Down', img: 'icon-folder',
                items: [
                    { text: 'Item 1', img: 'icon-page' },
                    { text: 'Item 2', img: 'icon-page' },
                    { text: 'Item 3', img: 'icon-page' }
                ]
            },
            { type: 'break' },
            { type: 'radio', id: 'item3', group: '1', text: 'Radio 1', img: 'icon-page' },
            { type: 'radio', id: 'item4', group: '1', text: 'Radio 2', img: 'icon-page' },
            { type: 'spacer' },
            { type: 'button', id: 'item5', text: 'Item 5', img: 'icon-save' }
        ]
    });
    /**
    $('#mySidebar').w2sidebar({
        name: 'mySidebar',
        img: null,
        nodes: [
            {
                id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true,
                nodes: [
                    { id: 'level-1-1', text: 'Level 1.1', img: 'icon-page' },
                    { id: 'level-1-2', text: 'Level 1.2', img: 'icon-page' },
                    { id: 'level-1-3', text: 'Level 1.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-2', text: 'Level 2', img: 'icon-folder',
                nodes: [
                    {
                        id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder',
                        nodes: [
                            { id: 'level-2-1-1', text: 'Level 2.1.1', img: 'icon-page' },
                            { id: 'level-2-1-2', text: 'Level 2.1.2', img: 'icon-page' },
                            { id: 'level-2-1-3', text: 'Level 2.1.3', img: 'icon-page' }
                        ]
                    },
                    { id: 'level-2-2', text: 'Level 2.2', img: 'icon-page' },
                    { id: 'level-2-3', text: 'Level 2.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-3', text: 'Level 3', img: 'icon-folder',
                nodes: [
                    { id: 'level-3-1', text: 'Level 3.1', img: 'icon-page' },
                    { id: 'level-3-2', text: 'Level 3.2', img: 'icon-page' },
                    { id: 'level-3-3', text: 'Level 3.3', img: 'icon-page' }
                ]
            }
        ],
        onClick: function(event) {
            console.log(event.target);
        }
    });
     */
    /**
    $('#sidebar').w2sidebar({
        name: 'sidebar',
        img: null,
        nodes: [
            {
                id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true,
                nodes: [{ id: 'level-1-1', text: 'Level 1.1', img: 'icon-page' },
                    { id: 'level-1-2', text: 'Level 1.2', img: 'icon-page' },
                    { id: 'level-1-3', text: 'Level 1.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-2', text: 'Level 2', img: 'icon-folder',
                nodes: [{
                    id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder',
                    nodes: [
                        { id: 'level-2-1-1', text: 'Level 2.1.1', img: 'icon-page' },
                        { id: 'level-2-1-2', text: 'Level 2.1.2', img: 'icon-page' },
                        { id: 'level-2-1-3', text: 'Level 2.1.3', img: 'icon-page' }
                    ]
                },
                    { id: 'level-2-2', text: 'Level 2.2', img: 'icon-page' },
                    { id: 'level-2-3', text: 'Level 2.3', img: 'icon-page' }
                ]
            },
            {
                id: 'level-3', text: 'Level 3', img: 'icon-folder',
                nodes: [{ id: 'level-3-1', text: 'Level 3.1', img: 'icon-page' },
                    { id: 'level-3-2', text: 'Level 3.2', img: 'icon-page' },
                    { id: 'level-3-3', text: 'Level 3.3', img: 'icon-page' }
                ]
            }
        ],
        onClick: function(id, data) {
            console.log(id);
        }
    });
    */
    /**
    $('#myTabs').w2tabs({
        name: 'myTabs',
        active: 'tab1',
        tabs: [
            { id: 'tab1', text: 'Tab 1' },
            { id: 'tab2', text: 'Tab 2' },
            { id: 'tab3', text: 'Tab 3' },
            { id: 'tab4', text: 'Tab 4' }
        ],
        onClick: function(event) {
            $('#myTabsContent').html(event.target);
        }
    });
    */
    $('#myForm').w2form({
        name: 'myForm',
        fields: [
            { name: 'first_name', type: 'text', required: true },
            { name: 'last_name', type: 'text', required: true },
            { name: 'comments', type: 'text' }
        ],
        actions: {
            reset: function () {
                this.clear();
            },
            save: function () {
                this.save();
            }
        }
    });
    w2popup.open({
        title: 'Popup Title HTML',
        body: 'Body HTML',
        buttons: 'Buttons HTML'
    });
});
