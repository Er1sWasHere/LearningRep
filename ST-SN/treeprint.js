class TreeNode{
            constructor(value){
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
        let root = new TreeNode(5);

        root.left = new TreeNode(3);
        root.right = new TreeNode(8);

        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(1);

        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(4);
        function show(root){
            console.log(root.value);
            if(root.left != null){
                show(root.left);
            }
            if(root.right != null){
                show(root.right);
            }
        }
console.log(show(root));