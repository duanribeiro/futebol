import styled from 'styled-components';
const TaskWidgetWrapper = styled.div`    
    .message-card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03), 0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03), 0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05), 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
        border-radius: 6px;
        background: white;
        .message-header {
            font-size: 20px;
            font-weight: 600;
            padding: 20px 24px;
        }

        .task-icons {
            font-size: 14px;
            i {
                cursor: pointer
            }
        }

        .message {
            font-size:12px;
        }

        .show-more {
            font-weight: 600;
            cursor: pointer;
        }
        
        .message-list {
            color: rgba(0,0,0,.54);
            font-size: 14px;
            .list-container {
                border-top: 1px solid rgba(0,0,0,0.1);
            }
        }

        .profie-image {
            width: 41px;
            height: 41px;
            border-radius: 50%;
        }
    }
`;

export default TaskWidgetWrapper