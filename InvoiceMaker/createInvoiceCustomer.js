const easyinvoice=require('easyinvoice');
const fs=require('fs')
const path=require('path')
const ejs=require('ejs');

async function makeInvoice(customer){
    console.log(customer);
    let product=[];
    for(let p of customer.cartProducts){
        product.push({
            "quantity": p.quntity,
            "description": p.product.name,
            "tax-rate": p.product.gstSlap,
            "price": p.product.mrp,
            "discount":p.product.discount
        });
    }
    // var data = {
    //     // Customize enables you to provide your own templates
    //     // Please review the documentation for instructions and examples
    //     "customize": {
    //          "template": path.join(__dirname+"..",'/views/invoiceTemplete.ejs')
    //     },
    //     "images": {
    //         // The logo on top of your invoice
    //         "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
    //         // The invoice background
    //         "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
    //     },
    //     // Your own data
    //     "sender": {
    //         "company": "Sample Corp",
    //         "address": "Sample Street 123",
    //         "zip": "1234 AB",
    //         "city": "Sampletown",
    //         "country": "Samplecountry"
    //         //"custom1": "custom value 1",
    //         //"custom2": "custom value 2",
    //         //"custom3": "custom value 3"
    //     },
    //     // Your recipient
    //     "client": {
    //         "company": customer.customerName,
    //         "address": customer.customerAddress,
    //         "zip": "4567 CD",
    //         "city": "Clientcity",
    //         "country": "Clientcountry"
    //         // "custom1": "custom value 1",
    //         // "custom2": "custom value 2",
    //         // "custom3": "custom value 3"
    //     },
    //     "information": {
    //         // Invoice number
    //         "number": "2021.0001",
    //         // Invoice data
    //         "date": "12-12-2021",
    //         // Invoice due date
    //         "due-date": "31-12-2021"
    //     },
    //     // The products you would like to see on your invoice
    //     // Total values are being calculated automatically
    //     "products": product,
    //     // The message you would like to display on the bottom of your invoice
    //     "bottom-notice": "Kindly pay your invoice within 15 days.",
    //     // Settings to customize your invoice
    //     "settings": {
    //         "currency": "IND", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
    //         // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
    //         "tax-notation": "gst", // Defaults to 'vat'
    //         // "margin-top": 25, // Defaults to '25'
    //         // "margin-right": 25, // Defaults to '25'
    //         // "margin-left": 25, // Defaults to '25'
    //         // "margin-bottom": 25, // Defaults to '25'
    //         // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
    //         // "height": "1000px", // allowed units: mm, cm, in, px
    //         // "width": "500px", // allowed units: mm, cm, in, px
    //         // "orientation": "landscape", // portrait or landscape, defaults to portrait
    //     },
    //     // Translate your invoice to your preferred language
    //     "translate": {
    //         // "invoice": "FACTUUR",  // Default to 'INVOICE'
    //         // "number": "Nummer", // Defaults to 'Number'
    //         // "date": "Datum", // Default to 'Date'
    //         // "due-date": "Verloopdatum", // Defaults to 'Due Date'
    //         // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
    //         // "products": "Producten", // Defaults to 'Products'
    //         // "quantity": "Aantal", // Default to 'Quantity'
    //         // "price": "Prijs", // Defaults to 'Price'
    //         // "product-total": "Totaal", // Defaults to 'Total'
    //         // "total": "Totaal" // Defaults to 'Total'
    //     },
    // };

    // const result = await easyinvoice.createInvoice(data);                       
    // await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');

    // let invoice=await ejs.renderFile(path.join(__dirname,'../views/invoiceTemplete',{customer:customer}))
    // console.log(invoice)
    
}



module.exports=makeInvoice