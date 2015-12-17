Ext.define('BSOFT.app.view.newWindow', {
    extend: 'Ext.window.Window',
    alias : 'widget.newWindow',
    width: 800,
    height: 600,
    minHeight: 400,
    minWidth: 550,
    hidden: false,
    maximizable: true,
    modal:true,
    title : 'Add User',
    layout: 'fit',
    autoShow: true,
    initComponent: function() {
        var form = Ext.widget('form', {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            border: false,
            bodyPadding: 10,
			name: 'myform',
            fieldDefaults: {
                labelAlign: 'top',
                labelWidth: 100,
                labelStyle: 'font-weight:bold'
            },
            items: [{
                xtype: 'fieldcontainer',
                fieldLabel: 'Your Name',
                labelStyle: 'font-weight:bold;padding:0',
                layout: 'hbox',
                defaultType: 'textfield',
                fieldDefaults: {
                    labelAlign: 'top'
                },
                items: [{
                    flex: 1,
                    name: 'firstName',
                    fieldLabel: 'First',
                    allowBlank: false
                }, {
                    width: 30,
                    name: 'middleInitial',
                    fieldLabel: 'MI',
                    margins: '0 0 0 5'
                }, {
                    flex: 2,
                    name: 'lastName',
                    fieldLabel: 'Last',
                    allowBlank: false,
                    margins: '0 0 0 5'
                }]
            }, {
                xtype: 'textfield',
                fieldLabel: 'Your Email Address',
                vtype: 'email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Subject',
                allowBlank: false
            }, {
                xtype: 'textareafield',
                fieldLabel: 'Message',
                labelAlign: 'top',
                flex: 1,
                margins: '0',
                allowBlank: false
            }],

                buttons: [{
                    text: 'add',
                    action:'add'
                }]
            });
        
        this.items = [form];
        this.buttons = [{
        	text: 'Save',
            action: 'save'
        },{
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        this.callParent(arguments);
    }
});