<template>
    <div class="home-page">
        <div class="profile-bar"
             @mouseenter="expandProfileBar"
             @mouseleave="collapseProfileBar">
            <div class="profile-icon">
                <img src="https://via.placeholder.com/50" alt="Profile" />
            </div>
            <div v-if="isProfileBarExpanded" class="profile-details">
                <p>John Doe</p>
                <p>john.doe@example.com</p>
            </div>
        </div>
        <div class="content">
            <div class="tabs">
                <button @click="activeTab = 'order-something'" :class="{ active: activeTab === 'order-something' }">Order Something</button>
                <button @click="activeTab = 'my-orders'" :class="{ active: activeTab === 'my-orders' }">My Orders</button>
                <button @click="activeTab = 'reports'" :class="{ active: activeTab === 'reports' }">Reports</button>
            </div>
            <div class="tab-content">
                <p v-if="activeTab === 'order-something'">Order Something Content</p>
                <p v-if="activeTab === 'my-orders'">My Orders Content</p>
                <p v-if="activeTab === 'reports'">Reports Content</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                isProfileBarExpanded: false,
                activeTab: 'order-something',
            };
        },
        methods: {
            expandProfileBar() {
                this.isProfileBarExpanded = true;
            },
            collapseProfileBar() {
                this.isProfileBarExpanded = false;
            },
        },
    };
</script>

<style scoped>
    .home-page {
        display: flex;
        height: 100vh;
    }

    .profile-bar {
        width: 60px;
        background-color: #2c3e50;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        transition: width 0.3s ease;
    }

        .profile-bar:hover {
            width: 200px;
        }

    .profile-icon img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    .profile-details {
        margin-top: 10px;
        text-align: center;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .tabs {
        display: flex;
        justify-content: center;
        background-color: #f8f9fa;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

        .tabs button {
            background: none;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            margin: 0 10px;
            transition: color 0.3s ease, border-bottom 0.3s ease;
        }

            .tabs button.active {
                color: #007bff;
                border-bottom: 2px solid #007bff;
            }

    .tab-content {
        padding: 20px;
    }
</style>
