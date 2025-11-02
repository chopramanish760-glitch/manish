// Test email OTP sending with AhaSend SMTP
const testEmail = "chopramanish760@gmail.com";
const backendUrl = "https://manish-5dlg.onrender.com";

async function testEmailOTP() {
  console.log('📧 TESTING EMAIL OTP SENDING\n');
  console.log('─'.repeat(60));
  console.log(`📧 Test Email: ${testEmail}`);
  console.log(`🌐 Backend URL: ${backendUrl}\n`);
  
  try {
    console.log('📤 Step 1: Testing with password reset endpoint...\n');
    console.log('   Using registration number: 2440014\n');
    
    const response = await fetch(`${backendUrl}/api/otp/request-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ regNumber: "2440014" })
    });
    
    const responseTime = Date.now();
    const text = await response.text();
    let result;
    
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.log('❌ Invalid JSON response!');
      console.log(`Response: ${text.substring(0, 500)}...\n`);
      return;
    }
    
    console.log('📥 Step 2: Backend Response:');
    console.log(JSON.stringify(result, null, 2));
    console.log('\n' + '─'.repeat(60));
    
    if (result.ok) {
      console.log('\n✅ OTP REQUEST SUCCESSFUL!');
      console.log(`📧 Masked Email: ${result.maskedEmail || result.email || 'N/A'}`);
      console.log(`📱 Masked Phone: ${result.maskedPhone || 'N/A'}`);
      console.log(`📝 Message: ${result.message}`);
      console.log(`📤 Email Sent Status: ${result.emailSent ? '✅ YES - Email was sent!' : '❌ NO - Email was NOT sent'}`);
      
      if (result.emailSent) {
        console.log('\n' + '─'.repeat(60));
        console.log('\n🎉 SUCCESS! Email should arrive shortly!');
        console.log(`📧 Check your inbox: ${testEmail}`);
        console.log(`   Subject: "Your OTP for Campus Event Hub"`);
        console.log(`   The OTP code will be a 6-digit number`);
        console.log(`\n💡 If you don't see the email:`);
        console.log(`   1. Check spam/junk folder`);
        console.log(`   2. Wait 1-2 minutes for delivery`);
        console.log(`   3. Check Render logs for detailed status`);
      } else {
        console.log('\n' + '─'.repeat(60));
        console.log('\n⚠️  WARNING: Email was NOT sent successfully!');
        console.log('\n🔍 Possible Issues:');
        console.log('   1. SMTP credentials not configured correctly');
        console.log('   2. AhaSend SMTP server connection issue');
        console.log('   3. Email address not valid');
        console.log('   4. Network/firewall blocking SMTP port 587');
        console.log('\n💡 Next Steps:');
        console.log('   1. Check Render Dashboard → Your Service → Logs');
        console.log('   2. Look for "✅ OTP Email sent successfully" or "❌ Error"');
        console.log('   3. Copy error details from logs');
        console.log('   4. Verify SMTP credentials in AhaSend dashboard');
      }
    } else {
      console.log('\n❌ OTP REQUEST FAILED!');
      console.log(`❌ Error: ${result.error}`);
      
      if (result.error.includes('not found')) {
        console.log('\n💡 User with registration number not found.');
      }
    }
    
  } catch (error) {
    console.log('\n❌ CONNECTION ERROR!');
    console.log(`❌ Error: ${error.message}`);
    console.log('\n⚠️  Could not connect to backend.');
    console.log('   Check:');
    console.log('   - Backend URL is correct');
    console.log('   - Backend is running on Render');
    console.log('   - Internet connection');
  }
  
  console.log('\n' + '─'.repeat(60));
  console.log('\n✨ Test completed!');
  console.log(`\n📧 IMPORTANT: Did you receive email at ${testEmail}?`);
  console.log('   - YES → Email OTP is working! ✅');
  console.log('   - NO → Check Render logs for errors ❌\n');
}

testEmailOTP();

