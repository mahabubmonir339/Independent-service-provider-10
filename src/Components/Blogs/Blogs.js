import React from 'react';

const Blogs = () => {
    return (
        <div className="container mb-5 mt-5 leading-tight">
            <h2>Qstion No 1. Difference between authorization and authentication.</h2>
            <h3>Ans: </h3><p><b>Authorization:</b>
                1. Authentication verifies who the user is.
                2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                3. Authentication is the first step of a good identity and access management process.
                4. Authentication is visible to and partially changeable by the user.
                <br />

                <b>Authentication:</b>
                1. Authorization determines what resources a user can access.
                2. Authorization works through settings that are implemented and maintained by the organization.
                3. Authorization always takes place after authentication.
                4. Authorization isn't visible to or changeable by the user.
                <br />

            </p>

            <h2>Qstion No 2. a)-Why are you using firebase?
                b)-What other option do you have to implement authentication?

            </h2>
            <h3>Ans:</h3> <p>
                <b>a)-Why are you using firebase?</b>

                1. Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
                2. Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen.
                3. Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance.
                4. Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience.
                <br />
                <b>b)-What other option do you have to implement authentication?</b>

                Five Common Authentication Types
                1.Password-based authentication. Passwords are the most common methods of authentication.
                2.Multi-factor authentication.
                3.Certificate-based authentication.
                4.Biometric authentication.
                5.Token-based authentication.
                <br />


            </p>
            <h2>Qstion No 3. What other sevices does firebase provide other than authentication?</h2>
            <h3>Ans:</h3> <p><br />
                <b>There are many services which Firebase provides, Most useful of them are:</b><br />
                1.Cloud Firestore.
                2.Cloud Functions.
                3.Hosting.
                4.Cloud Storage.
                5.Google Analytics.
                6.Predictions.
                7.Cloud Messaging.
                8.Dynamic Links
                9.Remote Config
            </p>
        </div>
    );
};

export default Blogs;