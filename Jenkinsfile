pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building your VS Code Hello World project...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t hello-world-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Project successfully executed via Jenkinsfile!'
            }
        }
    }
}