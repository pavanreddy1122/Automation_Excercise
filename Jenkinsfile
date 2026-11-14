pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo 'Installing Playwright browsers'
                bat 'npx playwright install'
            }
        }

        stage('Execute UI Tests') {
            steps {
                 script {
                        if (params.TEST_TAG == 'ALL') {
                             bat 'npx playwright test'
                         } else {
                            bat "npx playwright test --grep \"${params.TEST_TAG}\\b\""
                        }
                    }
            }
         }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}