<template>
    <div>
        <h1>Sign In</h1>
        <form @submit.prevent="handleSignIn">
            <input type="text"
                   v-model="username"
                   placeholder="Username" />
            <input type="password"
                   v-model="password"
                   placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignInPage',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleSignIn() {
            if (this.username && this.password) {
                this.$router.push('/home');
            } else {
                alert('Please enter both username and password.');
            }
        },
    },
};
</script>

<style scoped>
    form {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

        form div {
            margin-bottom: 12px;
        }

    label {
        display: block;
        margin-bottom: 6px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

        button:hover {
            background-color: #0056b3;
        }
</style>
