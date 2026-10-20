export const business = {
 name: 'JENDASH', email: 'jendashbv@gmail.com', phone: '08134043022',
 // Calls and WhatsApp number confirmed by the business owner.
 phoneVerified: true, whatsappNumber: '2348134043022', location: '', hours: '',
 vehicle: { name: '', year: '', transmission: '', seats: '', dailyPrice: '' }
};
export const enquirySubject = 'Car rental enquiry — JENDASH';
export const enquiryMessage = [
 'Hello JENDASH,', '',
 'I would like to enquire about renting your car.', '',
 'My name: [your name]',
 'Preferred pickup date: [date]',
 'Preferred return date: [date]',
 'Pickup / return location: [location]', '',
 'Please confirm availability, the total rental price, any deposit, and the documents and rental requirements.', '',
 'Thank you.'
].join('\n');
export const emailHref = `mailto:${business.email}?subject=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(enquiryMessage)}`;
export const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(business.email)}&su=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(enquiryMessage)}`;
export const outlookHref = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(business.email)}&subject=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(enquiryMessage)}`;
export const whatsappHref = business.phoneVerified && /^\d{10,15}$/.test(business.whatsappNumber) ? `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(enquiryMessage)}` : null;
