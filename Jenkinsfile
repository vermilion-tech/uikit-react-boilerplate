pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build Staging') {
            when { branch 'development' }
            steps {
                slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                sh 'npm install'
                sh 'npm run build:dev'
            }
        }
        stage('Build Production') {
            when { branch 'master' }
            steps {
                slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy Staging') {
            when { branch 'development' }
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: "credential-id", keyFileVariable: 'keyfile')]) {
                    sh 'ssh -o StrictHostKeyChecking=No -o UserKnownHostsFile=/dev/null -i ${keyfile} runner@example.com "rm -rf /docker/staging-frontend.example.com/dist"'
                    sh 'scp -o StrictHostKeyChecking=No -o UserKnownHostsFile=/dev/null -i ${keyfile} -r ./dist "runner@example.com:/docker/staging-frontend.example.com/dist"'

                    slackSend (color: '#7851a9', message: "DEPLOYED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) @ staging-frontend.example.com")
                }
            }
        }
        stage('Deploy Production') {
            when { branch 'master' }
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: "credential-id", keyFileVariable: 'keyfile')]) {
                    sh 'ssh -o StrictHostKeyChecking=No -o UserKnownHostsFile=/dev/null -i ${keyfile} runner@example.com "rm -rf /docker/prod-frontend.example.com/dist"'
                    sh 'scp -o StrictHostKeyChecking=No -o UserKnownHostsFile=/dev/null -i ${keyfile} -r ./dist "runner@example.com:/docker/prod-frontend.example.com/dist"'

                    slackSend (color: '#7851a9', message: "DEPLOYED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) @ prod-frontend.example.com")
                }
            }
        }
    }
    post {
        failure {
            slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        success {
            slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}
